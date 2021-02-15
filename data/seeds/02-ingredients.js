exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: "Milk"},
    {name: "Nesquick"},
    {name: "Peanuts"},
    {name: "Apples"},
    {name: "Hershey Chocolate"}
  ]);
};