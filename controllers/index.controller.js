const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
  Promise.all([
    Celebrity.find(),
    Movie.find()
  ])
  .then((results) => {
    const celebrities = results[0];
    const movies = results[1];
    res.render('index', { movies, celebrities })
  })
}

