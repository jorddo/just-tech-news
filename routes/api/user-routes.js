const router = require('express').Router();
const { User } = require('../../models');

// get /api/users
router.get('/', (req, res) => {});

// get /api/users/1
router.get('/:id', (req, res) => {});

// post /api/users
router.post('/', (req, res) => {});

// put /api/users/1
router.put('/:id', (req, res) => {});

// delete /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;
