const db = require("../dbConfig");

const find = () => {
    return db("steps").select();
};

const findById = (id) => {
    return db("steps").where({id}).first();
};

const findByRecipeId = (recipe_id) => {
    return db("steps").join("recipes as r", "r.id", "steps.recipe_id").where({"r.id": recipe_id}).orderBy("steps.step_number", "desc");
};

const add = async (recipe_id, step) => {  
    let newStep = await db("steps").join("recipes as r", "r.id", "steps.recipe_id").where({"r.id": recipe_id}).insert(step);
    return db("steps").where({id: newStep[0]}).first();
};

const update = async (id, step) => {
    let updatedStep = await db("steps").where({id}).update(step);

    return db("steps").where({id}).first();
};

const remove = (id) => {
    return db("steps").where({id}).del();
};

module.exports = {
    find,
    findById,
    findByRecipeId,
    add,
    update,
}