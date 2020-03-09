let Exercise = require('../models/exercise.model');


const Exercises = {
    findEx(req, res) {
    Exercise.find()
    .then(exercises => res.json(exercises))
     .catch(err => res.status(400).json('Error: ' +err));
},

   addEx(req, res) {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username, description, duration, duration, date
    });
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' +err));
},

    getEx(req, res){
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
},

    deleteEx(req, res){
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
},

   updateEx(req, res) {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
},
}

module.exports = Exercises;