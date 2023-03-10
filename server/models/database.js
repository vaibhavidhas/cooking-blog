const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vaibhavivdhas28:vaibhavi@cluster0.nsanqbw.mongodb.net/cooking?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');