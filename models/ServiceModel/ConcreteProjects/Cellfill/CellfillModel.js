const mongoose = require( "mongoose" );

const cellfillSchema = new mongoose.Schema( {
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

const cellfill = mongoose.model( "cellfill", cellfillSchema );

module.exports = cellfill;