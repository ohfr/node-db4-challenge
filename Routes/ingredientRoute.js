const express = require("express");

const db = require("../data/dbHelpers/ingredients");

const router = express.Router({
    mergeParams: true
});

router.get("/", async (req, res, next) => {
    try {
        res.json(await db.findRecipeIngredients(req.params.id));
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


router.delete("/:i_id", async (req, res, next) => {
    try {
        res.json(await db.remove(req.params.i_id));
    } catch(err) {
        next(err);
    };
});

module.exports = router;