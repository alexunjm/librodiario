/**
 * Libro Diario API
 * Archivo para la ruta /status
 *
 * Autor: Alexander Jaramillo | Atenea Services
 */

/*************************************************************************************************/

module.exports = {
	method: 'POST',
	path: '/status',
	handler: function(req, reply) {
		reply({
			ok: true,
			token: 'tokentokentokentokentoken'
		});
	}
};
