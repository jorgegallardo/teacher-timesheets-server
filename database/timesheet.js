const mongoose = require('mongoose');

const Timesheet = mongoose.model('Timesheet', {
  name: { type: String },
  fileNumber: { type: Number },
});

module.exports = Timesheet;
