const CardController = require('./controllers/carta.controller');
const CardRoutes = require('./routes/carta.routes');

const fastify = require('fastify')({ logger: true });

function addRoutes(){
    CardRoutes.routes.forEach(route => fastify.route(route));
}

addRoutes()

// Declare a route
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
