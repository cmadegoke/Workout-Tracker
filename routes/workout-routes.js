const router = require("express").Router();
const { Workout, Stats } = require("../models");


// get all exercise

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.put("/api/workouts?id", ({ body }, res) => {
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



router.put("/api/exercise/?_id", (req, res) => {
  Workout.create({})
    .sort({_id: '${lastWorkout._id}' })
    .then(dbworkout=> {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


  router.post("/api/exercise", ({ body }, res) => {
    Workout.create(body)

      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;