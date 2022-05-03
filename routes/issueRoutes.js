const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');


router.get('/:id', issueController.getIssue);
router.post('/', issueController.createIssue);
router.put('/:id', issueController.updateIssue);
router.delete('/:id', issueController.deleteIssue);


module.exports = router;