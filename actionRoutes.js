const express = require('express');

const router = express.Router();

const actionHelpers = require('./data/helpers/actionModel');

router.get('/', (req, res) => {
    actionHelpers.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    });
});




module.exports = router;