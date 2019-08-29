const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/auth-middleware');

router.get('/', restricted, (req, res) => {
	Users.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});
router.delete('/:id', restricted, (req,res) => {
	const { id } = req.params;
	Users.deleteUser()
	.then((users) => {
		res.status(202).json(users)
	})
	.catch((err) => {
		res.status(500).json({message:"yeet it failed delete"})
	})
})

router.put('/:id',restricted, (req,res) => {
	const body = req.body;
	const { id } = req.params;
	
	Users.updateUser(body,id)
	.then((users) => {
		res.status(200).json(users)
	})
	.catch((err) => {
		res.status(500).json({message:"Put got shook and didn't put"})
	})
})

module.exports = router;