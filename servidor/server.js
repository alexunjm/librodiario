/**
 * Libro Diario API
 * Archivo principal (entry point)
 *
 * Autor: Alexander Jaramillo | Atenea Services
 */

/**
 * Dependencias
 */
const Hapi = require('hapi');
const async = require('async');
const Boom = require('boom');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb').ObjectID;

var mdb = require('./model-mongodb');

/*************************************************************************************************/

/**
 *  terminator === the termination handler
 *  Terminate server on receipt of the specified signal.
 *  @param {string} sig  Signal to terminate on.
 */
var terminator = function(sig) {
	mdb.close();

	if (typeof sig === 'string') {
		console.log('\n%s: Received %s - terminating server...', Date(Date.now()), sig);
		process.exit(1);
	}

	else {
		console.log('%s: Node server stopped.', Date(Date.now()) );
	}
}


/**
 *  Setup termination handlers (for exit and a list of signals).
 */
//  Process on exit and signals.
process.on('exit', terminator);

// Removed 'SIGPIPE' from the list - bugz 852598.
['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'].forEach(function(element, index, array) {
	process.on(element, function() { terminator(element); });
});

/*************************************************************************************************/

var port = process.env.NODE_PORT || 3005;

var server = new Hapi.Server();

// Seed para encriptación del token
server.app.secret = 'a+Gj=W0P0%?KAx!3';

/*************************************************************************************************/

server.connection({
	port: port,
	address: process.env.NODE_IP || '0.0.0.0',
	routes: { cors: { origin: ['*'] } }
});

/*************************************************************************************************/
// Esquema de autenticación

server.auth.scheme('jwt', function(srv, opt) {
	return {
		authenticate: function(req, reply) {
			if (req.headers['x-auth-token']) {
				jwt.verify(req.headers['x-auth-token'], req.server.app.secret, function(err, _id) {
					if (err) {
						reply(Boom.wrap(err, 401));
						return;
					}
					reply.continue({credentials: new ObjectId(_id)});
				});
				return;
			}
			reply(Boom.unauthorized());
		}
	};
});

server.auth.strategy('default', 'jwt');

/*************************************************************************************************/
// Apps endpoints

server.route(require('./routes/favicon'));
server.route(require('./routes/status'));
server.route(require('./routes/root'));
server.route(require('./routes/registros'));
server.route(require('./routes/nuevo_registro'));
server.route(require('./routes/actualizar_registro'));

/*************************************************************************************************/
// Server endpoints

server.route(require('./routes/ingresar'));

/*************************************************************************************************/

async.series([
	function(callback) {
		server.register(require('inert'), callback);
	},

	function(callback) {
		mdb.init(callback);
	},

	function(callback) {
		server.start(callback);
	}
], function(err) {
	if (err) {
		throw err;
	}

	console.log(`Application worker ${process.pid} listening on port ${port}`);
});
