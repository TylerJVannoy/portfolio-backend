const router = require("express").Router();
let Message = require("../models/Message.model");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const newMessage = new Message({
    name,
    email,
    message,
  });

  newMessage
    .save()
    .then(() => res.json("Message Recieved"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
