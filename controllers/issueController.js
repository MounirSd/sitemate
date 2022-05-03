const Issue = require('../models/issue.js');

exports.createIssue = async (req, res, next) => {
    try {
        const issue = new Issue(req.body.title, req.body.description);
        console.log(issue);
        res.sendStatus(200)
    } catch (e) {
        console.error(e);
        res.sendStatus(400)
    }
};
exports.getIssue = async (req, res, next) => {
    res.json(new Issue('Some Title', 'Some Description', req.params.id));
};

exports.updateIssue = async (req, res, next) => {
    try {
        const issue = new Issue(req.body.title, req.body.description);
        console.log(issue);
        res.sendStatus(200)
    } catch (e) {
        console.error(e);
        res.sendStatus(400)
    }
};

exports.deleteIssue = async (req, res, next) => {
    res.send(req.params.id);
};

