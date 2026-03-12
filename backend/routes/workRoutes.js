const express = require('express');
const router = express.Router();
const workController = require('../controllers/workController');

router.get('/', workController.getWorks);
router.post('/', workController.createWork);
router.put('/:id', workController.updateWork);
router.delete('/:id', workController.deleteWork);

module.exports = router;
