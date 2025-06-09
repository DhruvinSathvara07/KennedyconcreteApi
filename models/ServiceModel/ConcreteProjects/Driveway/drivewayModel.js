const mongoose = require( "mongoose" );

const drivewaySchema = new mongoose.Schema( {
  title: {
    type: String,
    required: true
  },
  sub_title: {
    type: String,
    required: true
  },
  para: {
    type: [ String ],
    required: true
  }
} );

const driveway = mongoose.model( "driveway", drivewaySchema );

module.exports = driveway;