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


// creating the exercise and adding to array 
router.post("/api/workouts", ({ body }, res) => {
  console.log (body)
  Workout.create(body)
  .then(({_id}) => db.Workout.findOneAndUpdate({$push: {exercises: newExercise._id}},{upsert: true, new: true},))
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



router.get("/api/workouts/?id", (req, res) => {
  Workout.find({_id: '5e8520e83dbe8267c2e26e7d'})
    .then(dbworkout=> {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


  // router.post("/api/exercise", ({ body }, res) => {
  //   Workout.create(body)

  //     .then(dbworkout => {
  //       res.json(dbworkout);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // });

  router.get("/api/stats", (req, res) => {
    Stats.find({})
      .then(dbstas => {
        res.json(dbstas);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;