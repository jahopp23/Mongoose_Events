var Event = require('./MongooseEvent/models/event');

var JungleMusic = new Event({
  title: 'Jungle Music',
  location: 'Jupiter Lounge',
  date: 'November 3, 2016',
  time: '9 pm'
});

JungleMusic.save(function(err) {
  if (err) throw err;

  console.log('Event saved successfully!');

});
