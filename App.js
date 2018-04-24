const createError  = require('http-errors');
const express      = require('express');
const app          = express();
const path         = require('path');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');

// Routes
const usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);

app.use(express.static(path.resolve(__dirname, 'client', 'build'), {
		dotfiles:   'ignore',
		etag:       false,
		extensions: ['htm', 'html'],
		index:      false,
		maxAge:     '1d',
		redirect:   false,
		setHeaders: (res) => {res.set('x-timestamp', Date.now());}
}));

// catch all request not handled with API
app.get('*', (req, res) =>
{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) =>
{
		next(createError(404));
});

// error handler
app.use((err, req, res) =>
{
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error   = req.app.get('env') === 'development' ? err : {};

		// render the error page
		res.status(err.status || 500);
});

module.exports = app;