const mongoose = require( "mongoose" );

const ConcreteDeliveryAreas = new mongoose.Schema( {
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

const serviceConcrete = mongoose.model( "ConcreteDeliveryAreas", ConcreteDeliveryAreas );
module.exports = serviceConcrete;