const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const mongoUri = 'your_mongodb_atlas_uri';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('survey_db');
        const surveyCollection = db.collection('surveys');

        app.post('/submit-survey', (req, res) => {
            surveyCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/loading.html');
                })
                .catch(error => console.error(error));
        });

    })
    .catch(console.error);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
