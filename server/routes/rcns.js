const express = require('express');
const Rcn = require('mongoose').model('Rcn');

const router = express.Router();

/* eslint array-callback-return: "off"*/
router.get('/', (req, res) => {
  Rcn.find((err, rcn) => {
    if (err) {
      res.send(err);
    }
    res.json(rcn);
  });
});

router.post('/', (req, res) => {
  const rcn = new Rcn();
  rcn.mark = req.body.mark;
  rcn.outurn = req.body.outurn;
  rcn.nutCount = req.body.nutCount;
  rcn.quantity = req.body.quantity;
  rcn.price = req.body.price;
  rcn.port = req.body.port;
  rcn.arrivalDate = req.body.arrivalDate;
  rcn.email = req.body.email;
  rcn.phone = req.body.phone;
  rcn.company = req.body.company;

  rcn.save((err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Rcn created!' });
  });
});

module.exports = router;
