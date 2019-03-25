const express = require('express');
const router = express.Router();

const Group = require('../../models/Group');

router.get('/', async (req, res) => {
    const groups = await Group.find();
    res.send(groups);
})

router.post('/', async (req, res) => {
    const group = new Group({
        name: req.body.name,
        description: req.body.description,
        accessRights: req.body.accessRights
    })
    const data = await group.save();
    res.send(data);
})

router.delete('/:id', async (req, res) => {
    const data = await Group.findById(id).remove();
    res.send(data);
})

module.exports = router;


