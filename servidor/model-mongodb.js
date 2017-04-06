/**************************************************************************************************
 * Libro Diario API
 * Archivo de modelo de la base de datos MongoDB
 *
 * Autor: Alexander Jaramillo | Atenea Services
 */

const mongo = require('mongodb');
const Grid = require('gridfs-stream');
const async = require('async');
const Boom = require('boom');
const moment = require('moment-timezone');

var MongoClient = mongo.MongoClient;
const ObjectId = mongo.ObjectID;

//const URL = process.env.MONGODB_URL || 'mongodb://172.31.34.150:27017/libro-diario';
const URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/libro-diario';

var mdb = {};

var db /*= {};
db.close = () => console.log('No ha sido posible conectarse a la Base de Datos ' + URL)*/;
var gfs;

moment.locale('es');


/**************************************************************************************************
 * Inicializa conexión a la base de datos
 * @param  {Function} callback [description]
 */
mdb.init = function(callback) {
	MongoClient.connect(URL, function(err, database) {
		if (err) {
			callback(err);
			return;
		}
		db = database;
		gfs = new Grid(db, mongo);
		callback(null);
	});
};


/**************************************************************************************************
 * Cierra conexión a la base de datos
 */
mdb.close = function() {
	db.close();
};


/**************************************************************************************************
 * Funciones del app
 */

/**************************************************************************************************
 * Revisa si unas credenciales existen antes de registrar al usuario
 * @param  {[type]}   data     [description]
 * @param  {Function} callback [description]
 */
mdb.exists = function(data, callback) {
	async.parallel({
		email: function(cb) {
			db.collection('users').count({email: data.email}, cb);
		},
		cedula: function(cb) {
			if (data.cedula) {
				db.collection('users').count({cedula: data.cedula}, cb);
				return;
			}
			cb(null, 0);
		}
	}, function(err, result) {
		if (err) {
			callback(err);
			return;
		}
		callback(null, {
			email: result.email > 0,
			cedula: result.cedula > 0
		});
	});
};


/**************************************************************************************************
 * Creación de un nuevo usuario
 * @param  {[type]}   credentials [description]
 * @param  {Function} callback    [description]
 */
mdb.signup = function(data, callback) {
	data.cuenta_ok = false;
	db.collection('users').insertOne(data, callback);
};


/**************************************************************************************************
 * Verifica el correo de un nuevo usuario
 * @param  {[type]}   id       [description]
 * @param  {Function} callback [description]
 */
mdb.email_verify = function(id, callback) {
	db.collection('users').updateOne({_id: new ObjectId(id)}, {$unset: {no_verificado: ''}}, callback);
};


/**************************************************************************************************
 * Lista los registros del mes
 * @param  {Function} callback [description]
 */
mdb.getRegistryList = (callback) => {
  db.collection('book').find().toArray(callback);
};


/**************************************************************************************************
 * Inserta un nuevo registro en el libro diario
 * @param  {[type]}   data     [description]
 * @param  {Function} callback [description]
 */
mdb.insertRegistry = (data, callback) => {
	db.collection('book').insertOne(data, callback);
};


/**************************************************************************************************
 * Actualiza un registro en el libro diario
 * @param  {[type]}   data     [description]
 * @param  {Function} callback [description]
 */
mdb.updateRegistry = (data, callback) => {
	const id = data.id;
  delete data.id;
	db.collection('book').updateOne({_id: new ObjectId(id)}, data, callback);
};


/**************************************************************************************************
 * Finalmente:
 */
module.exports = mdb;
