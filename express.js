const express = require('express')

const knex = require('knex')(require('./knexfile.js')["development"]);
const app = express();

app.get('/', (req, res) => {
  res.send('Made it to root!')
})

app.get('/pets', (req, res)=>{
  knex('pet')
  .then(pets => {
    let petNames = pets.map((pet)=>pet.name)
    res.json(petNames)
  })
})

app.get('/pets/all', (req, res)=>{
  knex('pet')
    .leftJoin('pet_food', 'pet_food.id', 'pet.pet_food_id')
    .leftJoin('pet_type', 'pet_type.id', 'pet.pet_type_id')
    .select('pet.name', 'pet_food.food_name', 'pet_type.animal_type')
    .then(petInfo=>res.json(petInfo))

})



module.exports = app