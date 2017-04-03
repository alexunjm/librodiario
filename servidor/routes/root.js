/**
 * Libro Diario API
 * Archivo para la ruta /
 *
 * Autor: Alexander Jaramillo | Atenea Services
 */

module.exports = {
	method: 'GET',
	path: '/',
	config: {
		jsonp: 'callback',
		handler: function(req, reply) {
			reply({
				version: require('../package.json').version
			});
		}
	}
};
