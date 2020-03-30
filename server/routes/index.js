var express = require("express");
var router = express.Router();
const faker = require("faker");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* GET home page. */
router.get("/users", function(req, res, next) {
  const randOutcome = getRndInteger(0, 1);
  const range = [...Array(faker.random.number({ min: 0, max: 100 })).keys()];
  const users = range.map(_index => faker.helpers.userCard());
  console.log(randOutcome)
  if (randOutcome === 0) {
    res.statusCode = 500;
  }
  res.json({ users });
});

module.exports = router;
