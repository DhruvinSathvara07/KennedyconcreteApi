const mongoose = require( "mongoose" );


const slabSchema = new mongoose.Schema( {
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

const slab = mongoose.model( "slab", slabSchema );

module.exports = slab;