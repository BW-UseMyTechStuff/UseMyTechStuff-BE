const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const restricted = require('./auth-middleware');


router.post('/register', (req,res) => {
let user = req.body;

if(!user.usename || !user.password){
    res.status(404).json({message: "Please enter a username or password"})
}
const hash = bcrypt.hashSync(user.password, 15);
user.password = hash;
Users.add(user)
.then((newUser) => {
    res.status(201).json(newUser);

})
.catch(err => {
    res.status(500).json(err)
})
})