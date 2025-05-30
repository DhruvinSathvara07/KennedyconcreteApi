const Form = require( "../models/Form" );

exports.submitForm = async ( req, res ) =>
{
  try
  {
    const formData = new Form( req.body );
    await formData.save();
    res.status( 200 ).json( { message: "Form submitted" } );
  } catch ( err )
  {
    res.status( 500 ).json( { message: "Server error", error: err.message } );
  }
};
