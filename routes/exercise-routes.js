const router = require("express").Router();
const exercise = require("../models");

router.post("/api/exercise", ({ body }, res) => {
  exercise.create(body)
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.get("/api/workouts/range", (req, res) => {
//   Workout .find().sort({date: -1}).limit(7)
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/exercise", (req, res) => {
  exercise.find({})
    .sort({ date: -1 })
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});