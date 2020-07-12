const express = require('express');
const recipeRoute = express.Router();

// recipe model
let Recipe = require('../models/Recipe');

// Add recipe
recipeRoute.route('/add-recipe').post((req, res, next) => {
  Recipe.create(req.body, (error, data) => {
    if (error) {
      
      return next(error)
      
    } else {
      res.json(data)
    }
  })
});

// Get all recipe
recipeRoute.route('/').get((req, res) => {
  Recipe.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single recipe
recipeRoute.route('/read-recipe/:id').get((req, res) => {
  Recipe.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update recipe
recipeRoute.route('/update-recipe/:id').put((req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      //console.log(error)
    } else {
      res.json(data)
      //console.log('recipe successfully updated!')
    }
  })
})

// Delete recipe
recipeRoute.route('/delete-recipe/:id').delete((req, res, next) => {
  Recipe.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = recipeRoute;