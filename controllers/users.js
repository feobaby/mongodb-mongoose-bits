let User = require('../models/user.model');

const Users = {
    findUs(req, res){
    User.find()
    .then(users=> res.json(users))
    .catch(err => res.status(400).json('Error: ' +err));
},
    createUs(req, res) {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
},
}

module.exports = Users;