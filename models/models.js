
var mongoose = require('mongoose');
var Schema = mongoose.schema;

//create Schema 

var eventSchema = new Schema({
  title: String,
  location: String,
  date: String,
  time: String,
  },
  created_at: Date,
  updated_at: Time
});

eventSchema.methods.dudify = function() {
  
  this.title = this.title +'Jungle Music';

  return.this.title;
};

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;

