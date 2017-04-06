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

const defaultMessage = function(message) {
  return {message: message};
}
const handler = function(req, reply) {
	console.log(req.payload);
	mdb.insertRegistry(req.payload, function(err) {
		if (err) {
			console.log(err);
			reply(Boom.wrap(err, 403));
			return;
		}
		console.log(defaultMessage('ok'));
		reply(defaultMessage('ok'));
	});
};

module.exports = {
	method: 'POST',
	path: '/nuevo_registro',
	handler: handler
};
