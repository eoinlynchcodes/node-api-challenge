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

router.get('/:id', (req, res) => {
    const id = req.params.id;
    actionHelpers.get(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    });
});

router.post('/:id/addAction', (req, res) => {
    const action = req.body;
    actionHelpers.insert(action)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    actionHelpers.delete(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    actionHelpers.update(id, req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    });
});


module.exports = router;