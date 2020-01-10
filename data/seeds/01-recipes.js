exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe: "Apple Sauce"},
    {recipe: "Choclate Peanuts"},
    {recipe: "Chocolate Milk"}
  ]);
};
