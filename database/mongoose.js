const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/timesheets', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// defining the timesheet model
// const Timesheet = mongoose.model('Timesheet', {
//   name: { type: String },
//   fileNumber: { type: Number },
// });

// creating an instance of the model
// const test = new Timesheet({ name: 'test timesheet', fileNumber: 'one' });

// saving the instance to the db
// test
//   .save()
//   .then(() => {
//     console.log(test);
//   })
//   .catch((error) => {
//     console.log('something went wrong: ' + error);
//   });
