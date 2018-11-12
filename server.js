const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
  host:'localhost',
  port:8000
});

// Add the route
server.route({
  method:'GET',
  path:'/hello',
  handler:function(request,h) {
    return { settings: { name: 'Gaurab KC' } };
  },
  config: {
    cors: {
      origin: ['http://localhost:3000'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  },
});

// Start the server
async function start() {
  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};

start();
