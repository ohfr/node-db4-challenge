exports.up = async function(knex) {
    await knex.schema.createTable("recipes", tbl => {
          tbl.increments();
  
          tbl.string("recipe", 128).unique().notNullable();
    });
  
    await knex.schema.createTable("ingredients", tbl => {
          tbl.increments();
  
          tbl.string("name", 128).unique().notNullable();
    });
  
    await knex.schema.createTable("steps", tbl => {
          tbl.increments();
  
          tbl.integer("recipe_id").notNullable().references("id").inTable("recipes").onUpdate("CASCADE").onDelete("CASCADE");
          tbl.integer("step_number").notNullable();
          tbl.string("step", 128).notNullable();
      });
  
    await knex.schema.createTable("recipe_ingredients", tbl => {  
          tbl.integer("ingredient_id").notNullable().references("id").inTable("ingredients").onUpdate("CASCADE").onDelete("CASCADE");
          tbl.integer("recipe_id").notNullable().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE");
          tbl.float("quantity").notNullable();
          tbl.string("unit", 128).notNullable();

          tbl.primary(["recipe_id", "ingredient_id"]);
      });
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("recipe_ingredients");
      await knex.schema.dropTableIfExists("steps");
      await knex.schema.dropTableIfExists("ingredients");
      await knex.schema.dropTableIfExists("recipes");
  };
