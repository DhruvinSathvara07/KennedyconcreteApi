const mongoose = require( "mongoose" );

const instantSchema = new mongoose.Schema( {
  Herotitle: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  text: {
    type: String,
    required: true,
    trim: true
  },
  btntext: {
    type: String,
    required: true,
    trim: true
  },
}, {
  timestamps: true
} );

const Instant = mongoose.model( "Instant", instantSchema );
module.exports = Instant;