const express = require("express");

const router = express.Router({
    mergeParams: true
});

const db = require("../data/dbHelpers/steps");


router.get("/", async (req, res, next) => {
    try {
        res.json(await db.findByRecipeId(req.params.id));
    } catch(err) {
        next(err);
    };
});

router.post("/", async (req, res, next) => {
    try {
        res.json(await db.add(req.params.id, req.body));
    } catch(err) {
        next(err);
    };
});

router.put("/", async (req, res, next) => {
    try {
        res.json(await db.update(req.params.id, req.body));
    } catch(err) {
        next(err);
    };
});

router.delete("/:step_id", async (req, res, next) => {
    try {
        res.json(await db.remove(req.params.step_id));
    } catch(err) {
        next(err);
    };
});

module.exports = router;