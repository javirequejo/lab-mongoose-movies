const express = require('express');
const path = require('path');
const logger = require('morgan');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const indexRoutes = require('./routes/index.routes');
const celebritiesRoutes = require('./routes/celebrities.routes');
const moviesRoutes = require('./routes/movies.routes');



const app = express();

require('./config/db.config');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'));


app.use('/', indexRoutes);
app.use('/celebrities', celebritiesRoutes);
app.use('/movies', moviesRoutes);

app.listen(PORT, () => console.info(`App liste  n at ${PORT} port`));
