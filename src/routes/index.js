let app = null;
const bebot = require('./bebot_challenge')

const defineRoute = (ruta, requests) => {
	const baseRequest = '/api/';
	const route = baseRequest + ruta;
	app.use(route, requests);
};

module.exports = aplication => {
	app = aplication;
    bebot(defineRoute)
};
