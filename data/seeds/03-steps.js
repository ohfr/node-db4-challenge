exports.seed = function(knex) {
  return knex('steps').insert([
    {recipe_id: 1, step_number: 1, step: "Mash apples"},
    {recipe_id: 2, step_number: 1, step: "Melt chocolate"},
    {recipe_id: 3, step_number: 1, step: "Pour milk into glass"}
  ]);
};
