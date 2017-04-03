/**
 * Libro Diario API
 * Archivo para la ruta /bo/ingresar
 *
 * Autor: Alexander Jaramillo | Atenea Services
 */

/*************************************************************************************************/

module.exports = {
	method: 'POST',
	path: '/ingresar',
	handler: function(req, reply) {
		reply({
			ok: true,
			token: 'tokentokentokentokentoken'
		});
	}
};
