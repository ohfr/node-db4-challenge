
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {ingredient_id: 4, recipe_id: 1, quantity: 2.0, unit: "lb"},
    {ingredient_id: 3, recipe_id: 2, quantity: 1.0, unit: "oz"},
    {ingredient_id: 5, recipe_id: 2, quantity: 2.0, unit: "oz"},
    {ingredient_id: 2, recipe_id: 3, quantity: 1.0, unit: "gram"},
    {ingredient_id: 1, recipe_id: 3, quantity: 1.0, unit: "oz"},
  ]);

};