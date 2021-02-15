const express = require("express");

const router = express.Router();

const db = require("../data/dbHelpers/recipes");

const ingredientsRoute = require("../Routes/ingredientRoute");

const stepsRoute = require("../Routes/stepsRoute");

router.use("/:id/ingredients", ingredientsRoute);

router.use("/:id/steps", stepsRoute);

router.get("/", async (req, res, next) => {
    try {
        res.json(await db.find());
    } catch(err) {
        next(err);
    };
});

router.get("/:id", async (req, res, next) => {
    //make validation middleware for stretch ?
    try {
        res.json(await db.findById(req.params.id));
    } catch(err) {
        next(err);
    };
});

router.post("/", async (req, res, next) => {
    try {
        res.json(await db.add(req.body));
    } catch(err) {
        next(err);
    };
});

router.put("/:id", async (req, res, next) => {
    try {
        res.json(await db.update(req.params.id, req.body));
    } catch(err) {
        next(err);
    };
});

router.delete("/:id", async (req, res, next) => {
    try {
        res.json(await db.remove(req.params.id));
    } catch(err) {
        next(err);
    };
});

module.exports = router;