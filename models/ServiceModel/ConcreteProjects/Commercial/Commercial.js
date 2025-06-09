const mongoose = require( "mongoose" );

const commercialSchema = new mongoose.Schema( {
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

const commercial = mongoose.model( "commercial", commercialSchema );

module.exports = commercial;