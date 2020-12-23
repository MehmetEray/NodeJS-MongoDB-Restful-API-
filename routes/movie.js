var express = require('express');
var router = express.Router();

//models
const Movie = require('../models/Movie');

//POST

router.post('/', (req, res, next) => {
  /*
  const {title,category,country,year,imdb_score} = req.body;
  const movie = new Movie({
    title:title,
    category:category,
    country:country,
    year:year,
    imdb_score:imdb_score
  });
  */
  const movie = new Movie(req.body);
  const promise = movie.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
  /*
  movie.save((error,data) => {
    if(error)
      res.json(error);
    res.json(data);
  });
  */

  //http://localhost:3000/api/movies?director_id=5fe391f52db4b40bf243e92d&title=qweqwe&category=cate&country=usa&year =2019&imdb_score=3.2
});

//GET

router.get('/',(req,res) => {
  const promise = Movie.find({ });
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err)
  })
});

router.get('/:movie_id',(req,res) => {
  const promise = Movie.findById(req.params.movie_id);
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err)
  })
});

//PUT

router.put('/:movie_id',(req,res) => {
  const promise = Movie.findByIdAndUpdate(req.params.movie_id,req.body);
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err)
  })
});
  
//DELETE

router.delete('/:movie_id',(req,res) => {
  const promise = Movie.findByIdAndDelete(req.params.movie_id);
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err)
  })
});

//SORT TOP 10 WITH IMDB

router.get('/top/10',(req,res) => {
  const promise = Movie.find({ }).limit(10).sort({imdb_score:-1});
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err)
  })
});

//BETWEEN START YEAR AND END YEAR

router.get('/between/:startyear/:endyear',(req,res) => {
  const {start_year ,end_year} = req.params
  const promise = Movie.find(
    { 
      year : {'$gte' : parseInt(start_year),'$lte': parseInt(end_year)}
    }
  );
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err)
  })
});
module.exports = router;
