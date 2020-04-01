const router = require("express").Router();
const workout = require("../models");


// get all exercise

router.get("/exercise", (req, res) => {
  workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.post("/workouts", ({ body }, res) => {
  workout.create(body)
  .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { execises: _id } }, { new: true }))
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/workouts/range", (req, res) => {
  workout.find({}).sort({date: -1}).limit(7)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.get("/exercise/:id", (req, res) => {
  workout.find({})
    .sort({_id: '${lastWorkout._id}' })
    .then(dbexercise=> {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


  router.post("/api/exercise", ({ body }, res) => {
    exercise.create(body)
      .then(dbexercise => {
        res.json(dbexercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;