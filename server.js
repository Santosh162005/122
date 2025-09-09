const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Ensure data directory exists
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.post('/submit-survey', (req, res) => {
    const surveyData = {
        timestamp: new Date().toISOString(),
        ...req.body
    };

    const dataFile = 'data/surveys.json';
    let surveys = [];

    if (fs.existsSync(dataFile)) {
        const existingData = fs.readFileSync(dataFile, 'utf8');
        if (existingData.trim()) {
            surveys = JSON.parse(existingData);
        }
    }

    surveys.push(surveyData);
    fs.writeFileSync(dataFile, JSON.stringify(surveys, null, 2));

    res.json({ success: true, message: 'Survey submitted successfully!' });
});

app.get('/admin/data', (req, res) => {
    const dataFile = 'data/surveys.json';
    if (fs.existsSync(dataFile)) {
        const data = fs.readFileSync(dataFile, 'utf8');
        res.json(data ? JSON.parse(data) : []);
    } else {
        res.json([]);
    }
});

app.get('/admin/download', (req, res) => {
    const dataFile = 'data/surveys.json';
    if (fs.existsSync(dataFile)) {
        res.download(dataFile, 'engineer-day-surveys.json');
    } else {
        res.status(404).json({ error: 'No data found' });
    }
});

app.listen(PORT, () => {
    console.log(`Survey website running at http://localhost:${PORT}`);
    console.log(`Admin panel: http://localhost:${PORT}/admin`);
});
