const db = require("../dbConfig");

const find = () => {
    return db("ingredients").select();
};

const findById = (id) => {
    return db("ingredients").where({id}).first();
};

const remove = (id) => {
    return db("ingredients").where({id}).del();
};

const findRecipeIngredients = (recipe_id) => {
    return db("recipe_ingredients as ri").join("recipes as r", "r.id", "ri.recipe_id").where({"r.id": recipe_id}).select();
};

const add = async (ingredients) => {
    let newIngred = await db("ingredients").insert(ingredients);

    return db("ingredients").where({id: newIngred[0]}).first();
};



module.exports = {
    find,
    findById,
    remove,
    findRecipeIngredients
}