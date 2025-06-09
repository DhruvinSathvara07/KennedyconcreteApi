const About = require( "../../models/HomeModels/KenddyConcrete/KenddyConcrete" );

// Create a new About entry
exports.createAbout = async ( req, res ) =>
{
  try
  {
    const data = req.body;
    const about = await About.create( data );
    res.status( 201 ).json( about );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// Get all About entries
exports.getAbout = async ( req, res ) =>
{
  try
  {
    const about = await About.find();
    res.status( 200 ).json( about );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// Edit full About document
exports.editAbout = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const data = req.body;

    const about = await About.findByIdAndUpdate( id, data, { new: true } );
    if ( !about )
    {
      return res.status( 404 ).json( { error: "About entry not found" } );
    }
    res.status( 200 ).json( about );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// Delete About entry
exports.deleteAbout = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const about = await About.findByIdAndDelete( id );
    if ( !about )
    {
      return res.status( 404 ).json( { error: "About entry not found" } );
    }
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.updateButton = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const buttonData = req.body.button;

    const about = await About.findByIdAndUpdate(
      id,
      { button: buttonData },
      { new: true }
    );

    if ( !about )
    {
      return res.status( 404 ).json( { error: "About entry not found" } );
    }

    res.status( 200 ).json( { message: "Button updated successfully", about } );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};
