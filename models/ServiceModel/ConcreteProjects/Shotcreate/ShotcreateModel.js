const mongoose = require( "mongoose" );

const shotcreateSchema = new mongoose.Schema( {
  title: {
    type: String,
    required: true
  },
  sub_title: {
    type: String,
    required: true
  }
} );

const shotcreate = mongoose.model( "shotcreate", shotcreateSchema );

module.exports = shotcreate;