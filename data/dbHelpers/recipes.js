const db = require("../dbConfig");

const find = () => {
    return db("recipes").select();
};

const findById = (id) => {
    return db("recipes").where({id}).first();
};

const add = async (recipe) => {
    const newId = await db("recipes").insert(recipe);

    return db("recipes").where({id: newId[0]}).first();
};

const update = async (id, recipe) => {
    const newId = await db("recipes").where({id}).update(recipe);

    return db("recipes").where({id: newId[0]}).first();
};

const remove = (id) => {
    return db("recipes").where({id}).del();
};

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};
