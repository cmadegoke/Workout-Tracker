const router = require("express").Router();
const Workout = require("../models");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
  .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { execises: _id } }, { new: true }))
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).sort({date: -1}).limit(7)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({date: -1}).limit(7)
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;