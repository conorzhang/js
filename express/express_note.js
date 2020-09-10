/* 
0.打开vscode 快捷键shift+command+p 后输入shell；选择 Install ‘code’ command in PATH

1.node-nvm-nodemon      //安装环境工具
2.npm install -g express-generator      //安装express
3.express --version     //查看版本
4.1express blog      //新建项目
    .
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade
   change directory:
     $ cd blog
   install dependencies:
     $ npm install
   run the app:
     $ DEBUG=blog:* npm start
4.2 package.json
    {
    "name": "blog",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "start": "node ./bin/www"
    },
    "dependencies": {
        "cookie-parser": "~1.4.4",
        "debug": "~2.6.9",
        "express": "~4.16.1",
        "http-errors": "~1.6.3",
        "jade": "~1.11.0",
        "morgan": "~1.9.1"
    }
    }
4.3 app.js
    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');

    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');

    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
    next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    });

    module.exports = app;
4.4 bin/www
    #!/usr/bin/env node

    * Module dependencies.
    var app = require('../app');
    var debug = require('debug')('blog:server');
    var http = require('http');

    * Get port from environment and store in Express.

    var port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);

    * Create HTTP server.

    var server = http.createServer(app);

    * Listen on provided port, on all network interfaces.

    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    * Normalize a port into a number, string, or false.

    function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
    }

    * Event listener for HTTP server "error" event.

    function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
        case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
        default:
        throw error;
    }
    }

    * Event listener for HTTP server "listening" event.

    function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    }
4.5 index.js
    var express = require('express');
    var router = express.Router();
    //GET home page. 
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });    
    module.exports = router;
4.6 users.js
    var express = require('express');
    var router = express.Router();
    GET users listing. 
    router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });
    module.exports = router;
5.npm install       //进入blog目录，安装依赖包
6.npm start     //启动项目应用http://localhost:3000





*/