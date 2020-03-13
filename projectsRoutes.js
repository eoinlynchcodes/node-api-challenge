const express = require('express');

const router = express.Router();
const projectsHelpers = require('./data/helpers/projectModel');

router.get('/', (req, res) => {
projectsHelpers.get()
.then(response => {
    res.status(200).json(response);
})
.catch(error => {
    console.log(error);
    res.status(500).json(error);
});
});


module.exports = router;