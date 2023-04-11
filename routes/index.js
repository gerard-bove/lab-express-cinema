const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(result => {
        res.render('movies', {movies: result})
    })
    .catch(err => console.log(err))
})

router.get('/movie/:id', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
    .then(result => {
        res.render('movie-detail', {movie: result})
    })
    .catch(err => console.log(err))
})

module.exports = router;
