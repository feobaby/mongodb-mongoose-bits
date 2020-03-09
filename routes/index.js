const express = require('express');

const router = express.Router();
const Exercises = require('../controllers/exercises');
const Users = require('../controllers/users');

router.get('/api/v1/exercises', Exercises.findEx);
router.post('/api/v1/exercises/add', Exercises.addEx);
router.get('/api/v1/exercises/:id', Exercises.getEx);
router.delete('/api/v1/exercises/:id', Exercises.deleteEx);
router.patch('/api/v1/exercises/:id', Exercises.updateEx);

router.get('/api/v1/users', Users.findUs);
router.post('/api/v1/users/add', Users.createUs);

module.exports = router;