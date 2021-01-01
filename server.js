const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
require('./database/mongoose');
const Timesheet = require('./database/timesheet');
const createPDF = require('./pdf/pdfCreator');

app.use(bodyParser.json());
app.use(cors());

// app.get('', (req, res) => {
//   res.send('it works');
// });

app.post('/create', (req, res) => {
  const timesheet = new Timesheet(req.body);
  timesheet
    .save()
    .then(() => {
      console.log(timesheet);
      createPDF(req.body.firstName, req.body.lastName, req.body.fileNumber);
      res.status(201).json(timesheet);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log('server is running');
});
