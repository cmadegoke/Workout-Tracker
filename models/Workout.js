const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
      exercises: [
        
          {
            type: String,
            body: String
          },
          {
            name: String,
            body: String
          },
          {
            duration: {
                type: Number,
            }
        
          },
          {
              weight :{
                  type: Number
              }
          },
           { 
          reps :{
              type:Number
          } 
          },
          {
          sets: {
            type: Number 
          }
        }
      ]
});
      {
        toJSON: {
            WorkoutSchema.virtual('totalDuration').get(function() {
                return this.exercises.reduce((total, { duration }) => total + duration, 0);
              });
          // include any virtual properties when data is requested
          virtuals: true
        }
      }
  
     
    

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


