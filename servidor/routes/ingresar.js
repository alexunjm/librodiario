/**
 * Libro Diario API
 * Archivo para la ruta /nuevo_registro
 *
 * Autor: Alexander Jaramillo | Atenea Services
 */

/*************************************************************************************************/

const Boom = require('boom');
const moment = require('moment-timezone');

var mdb = require('../model-mongodb');

moment.locale('es');

const handler = function(req, reply) {
	console.log(req.body);
	mdb.getRegistryList(function(err, registros) {
		if (err) {
			console.log(err);
			reply(Boom.wrap(err, 403));
			return;
		}
		console.log(registros);
		reply(registros);
	});
};

module.exports = {
	method: 'POST',
	path: '/nuevo_registrox',
	handler: handler
};
