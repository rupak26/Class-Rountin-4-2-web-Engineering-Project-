const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submitSelectedCourse', (req, res) => {
    const selectedCourse = req.body.course;
    // Here you can do whatever you want with the selected course data
    console.log("Selected Course:", selectedCourse);
    // Respond to the client
    res.send('Selected course received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});