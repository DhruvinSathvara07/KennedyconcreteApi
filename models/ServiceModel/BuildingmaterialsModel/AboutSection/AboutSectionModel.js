const mongoose = require( "mongoose" );

const itemListSchema = new mongoose.Schema( {
  title: { type: String },
  description: { type: String },
  items: [ { type: String } ]
} );

const aboutSchema = new mongoose.Schema( {
  about_title: { type: String },
  heading: { type: String },
  description: { type: String },
  packages: [ itemListSchema ]
} );

const About = mongoose.model( "About", aboutSchema );
module.exports = About;
