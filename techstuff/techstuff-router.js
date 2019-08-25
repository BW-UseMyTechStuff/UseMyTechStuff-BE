const router = require('express').Router();
const restricted = require('')
const Users = require('../users/users-model');
const Stuff = require('./techstuff-model');


router.get('/items', (req,res) => {
    Stuff.getStuff()
        .then(stuff => {
    res.status(200).json(stuff)
})
    .catch(err => {
    res.status(404).json(err);
})
})
router.post('/newItem',restricted, (req, res) => {
const newItem = req.body;
Stuff.addStuff(newItem)
.then(item => {
    res.status(200).json(item)
})
.catch(err => {
    res.status(422).json(err)
})
});
router.put("/:id", (req, res) => {
    const body = req.body;
    const { id } = req.params;
    Stuff.updateStuff(body, id)
      .then(stuff => {
        res.status(200).json(stuff);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Failed to update" });
      });
  });
module.exports = router;