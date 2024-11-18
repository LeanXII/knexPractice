/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {

  await knex.schema.raw('TRUNCATE pet_type CASCADE')
  await knex('pet_type').del()
  await knex('pet_type').insert([
    {id: 1, animal_type: 'Bird'},
    {id: 2, animal_type: 'Cat'},
    {id: 3, animal_type: 'Dog'},
    {id: 4, animal_type: 'Fish'}
  ]);
};
