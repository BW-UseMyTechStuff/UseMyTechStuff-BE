const router = require('express').Router();
const restricted = require('../auth/auth-middleware')
const Users = require('../users/users-model');
const Stuff = require('./techstuff-model');
const multerUploads = require('../custommiddleware/multer');

router.get('/items', (req,res) => {
    Stuff.getStuff()
        .then(stuff => {
    res.status(200).json(stuff)
})
    .catch(err => {
    res.status(404).json(err);
})
})
router.post('/newItem', (req, res) => {
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

  router.post("/img/upload", multerUploads, (req, res) => {
    if (req.file) {
      const file = dataUri(req).content;
      return uploader.upload(file).then(result => {
        const picture = result.url;
        return res
          .status(200)
          .json({
            message: "Your image has been uploaded successfully to cloudinary",
            picture: picture
          })
          .catch(err =>
            res.status(400).json({
              message: "Something went wrong while processing your request",
              err: err
            })
          );
      });
    }
  })
module.exports = router;