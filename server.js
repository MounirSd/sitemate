const express = require('express');
const dotenv = require('dotenv');

dotenv.config({
    path: './config.env'
});

const issueRoutes = require('./routes/issueRoutes');
const app = express();

app.use(express.json());

app.use('/api/issue', issueRoutes);


app.use('*', (req, res, next) => {
    next((404, 'fail', 'Not Found'), req, res, next);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});

