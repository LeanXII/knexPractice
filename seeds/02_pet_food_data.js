/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {

  await knex.schema.raw('TRUNCATE pet_food CASCADE');
  await knex('pet_food').del()
  await knex('pet_food').insert([
    {id: 1, food_name: 'purina', description: 'cat food'},
    {id: 2, food_name: 'kibble', description: 'dog food'},
    {id: 3, food_name: 'fish food', description: 'fish food'}
  ]);
};
