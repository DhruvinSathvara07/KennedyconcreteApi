const mongoose = require( "mongoose" );

const decorativeSchema = new mongoose.Schema( {
  title: {
    type: String,
    required: true
  },
  sub_title: {
    type: String,
    required: true
  },
  para: {
    type: String,
    required: true
  }
} );

const decorative = mongoose.model( "decorative", decorativeSchema );

module.exports = decorative;