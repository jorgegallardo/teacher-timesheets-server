const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get("", (req, res) => {
  res.send('it works');
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: 'timesheet created successfully' });
});

app.listen(3000, () => {
  console.log('server is running');
});
