const router = require("express").Router();
const { Workout, Stats } = require("../models");


const promiseHandler = promise=>promise.then(res=>[null,res]).catch(err=>[err,null]);



router.get('/api/workouts', async (req, res) => {
  const[err, workoutData]=await promiseHandler(
  Workout.find());
   if(err){
     console.log(err);
     return res.json(err);
   }
      res.json(workoutData);
    });
  


router.post('/api/workouts', async({body} ,res) => {
  const[err,workoutData]= await promiseHandler(
  Workout.create(body))
  if(err){
    console.log(err);
    return res.json(err);
  }
     res.json(workoutData);
   });


router.get('/api/workouts/range', async (_, res) => {
  const[err,workoutData]= await promiseHandler(
  Workout.find()
  .sort({date: -1}).limit(7)
  );
   if(err){
     console.log(err);
     return res.json(err);
   }
      res.json(workoutData);
    });
  



  router.put('/api/workouts/:id', async({ body, params:{id:_id}}, res) => {
    console.log (body)
    const[err,workoutData]=await promiseHandler(
    Workout.findByIdAndUpdate ({_id}, {$push: {exercises: body}},{runValidators: true, new: true},));
  
    if(err){
      console.log(err);
      return res.json(err);
    }
       res.json(workoutData);
     });







module.exports = router;