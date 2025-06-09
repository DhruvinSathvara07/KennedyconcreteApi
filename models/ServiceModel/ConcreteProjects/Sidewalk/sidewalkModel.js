const mongoose = require( "mongoose" );

const sidewalkSchema = new mongoose.Schema( {
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

const sidewalk = mongoose.model( "sidewalk", sidewalkSchema );

module.exports = sidewalk;