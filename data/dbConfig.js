const knex = require("express");

const config = require("../knexfile");


const db = knex(config.development);

module.exports = db;