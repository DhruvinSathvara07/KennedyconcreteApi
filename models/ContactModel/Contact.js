const mongoose = require( "mongoose" );

const locationSchema = new mongoose.Schema( {
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
} );

const contactSchema = new mongoose.Schema( {
  contact_title: {
    type: String,
    required: true,
  },
  contact_secondtitle: {
    type: String,
    required: true,
  },
  contact_paraone: {
    type: String,
    required: true,
  },
  contact_paratwo: {
    type: String,
    required: true,
  },
  locations: {
    type: [ locationSchema ],
    required: true,
  },
} );

const Contact = mongoose.model( "Contact", contactSchema );
module.exports = Contact;
