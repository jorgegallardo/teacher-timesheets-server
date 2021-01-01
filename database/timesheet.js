const mongoose = require('mongoose');

const Timesheet = mongoose.model('Timesheet', {
  firstName: { type: String },
  lastName: { type: String },
  fileNumber: { type: Number },
});

module.exports = Timesheet;
