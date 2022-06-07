const nameModule = 'challenge/';

const { app: contextoInicial } = require('./src/contextoInicial');
const { app: obtenerInfracciones } = require('./src/obtenerInfracciones');

module.exports = define => {
	define(nameModule + 'contextoInicial', contextoInicial);
	define(nameModule + 'obtenerInfracciones', obtenerInfracciones);
};
