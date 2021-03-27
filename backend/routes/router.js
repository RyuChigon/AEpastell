const express = require('express');
const os = require('os');
const router = express.Router();
const cors = require('cors');
const db = require('../dbconnection');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/conv', (req, res) => {
    console.log(req.body.text);
    var sql = `select CONV_A from CONV where CONV_Q='${req.body.text}'`
    console.log("wow");
    db.query(sql, (err, rows) => {
    if (!err) {
        console.log(rows[0].CONV_A);
        res.send(rows[0].CONV_A);
    } else {
        console.log(`query error : ${err}`);
        res.send(err);
    }
    });
});

module.exports = router;