// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

let { readFileSync } = require('fs');

module.exports = function(app, info) {
  let livereloadTemplate = readFileSync('./server/proxy-livereload.template.js', { encoding: 'utf-8' })

  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });

  if (process.env.EMBER_CLI_INSTRUMENTATION == 1) {
    require('broccoli-inspector/lib/middleware')(app, info);
  }

  app.use('/ember-cli-live-reload.js', function(request, response, next) {
    response.contentType('application/javascript');
    response.send(livereloadTemplate);
    next();
  })
};
