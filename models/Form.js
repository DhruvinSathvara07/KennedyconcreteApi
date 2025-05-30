const mongoose = require( "mongoose" );

const formSchema = new mongoose.Schema( {
  firstName: String,
  lastName: String,
  email: String,
  projectOverview: String,
} );

module.exports = mongoose.model( "Form", formSchema );
