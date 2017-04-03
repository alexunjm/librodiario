/**
 * Libro Diario API
 * Archivo para la ruta /favicon.ico
 *
 * Autor: Alexander Jaramillo | Atenea Services
 */

module.exports = {
	method: 'GET',
	path: '/favicon.ico',
	handler: function(req, reply) {
		reply.file('../src/favicon.ico');
	}
};
