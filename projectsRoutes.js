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

router.get('/:id', (req, res) => {
    const id = req.params.id;
    projectsHelpers.get(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    });
});

router.post('/:id/projects', (req, res) => {
    const id = req.params.id++;
    const project = req.body;
    project.project_id = id; 
    projectsHelpers.insert(project)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    projectsHelpers.update(id, req.body)
    .then(response => {
        res.status(202).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    projectsHelpers.remove(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error);
    })
})



module.exports = router;