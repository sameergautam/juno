const Hapi = require('hapi');
const rp = require('request-promise');

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
    console.log(request);
    return { settings: { FirstName: 'ABC DEF' } };
  },
  config: {
    cors: {
      origin: ['http://localhost:3000'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  },
});

server.route({
  method: 'GET',
  path: '/dashboard',
  handler:function(req, h) {
  var options = {
    uri: 'http://ecs-services-1784001078.us-east-1.elb.amazonaws.com/worker/2d30cdd7-dea8-41f7-9aa7-260ea8f3bfee',
    method: 'GET',
    json: true
  };
  var data1;
  data1 = rp(options)
    .then(function (data) {
      console.log('Data' + JSON.stringify(data));
      return JSON.stringify(data);
    })
    .catch (function (err) {
      console.log('ERROR:' + err);
    })
    .finally( function (){
    });
    return data1;
  }
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
