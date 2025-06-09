const About = require( "../../../../models/ServiceModel/BuildingmaterialsModel/AboutSection/AboutSectionModel" );

// GET all About section data
exports.getAboutSection = async ( req, res ) =>
{
  try
  {
    const data = await About.find();
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.error( "Error fetching About section:", error.message );
    res.status( 500 ).json( { error: error.message } );
  }
};

// POST new About section entry
exports.createAboutSection = async ( req, res ) =>
{
  try
  {
    const data = req.body;

    const savedAbout = await About.create( data );
    res.status( 201 ).json( savedAbout );
  } catch ( error )
  {
    console.error( "Error creating About section:", error.message );
    res.status( 400 ).json( { error: error.message } );
  }
};

// PUT update About section by ID
exports.updateAboutSection = async ( req, res ) =>
{
  try
  {
    const updatedAbout = await About.findByIdAndUpdate( req.params.id, req.body, {
      new: true,
      runValidators: true,
    } );
    if ( !updatedAbout )
    {
      return res.status( 404 ).json( { message: "About section not found" } );
    }
    res.status( 200 ).json( updatedAbout );
  } catch ( error )
  {
    console.error( "Error updating About section:", error.message );
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE About section by ID
exports.deleteAboutSection = async ( req, res ) =>
{
  try
  {
    const deletedAbout = await About.findByIdAndDelete( req.params.id );
    if ( !deletedAbout )
    {
      return res.status( 404 ).json( { message: "About section not found" } );
    }
    res.status( 200 ).json( { message: "About section deleted successfully" } );
  } catch ( error )
  {
    console.error( "Error deleting About section:", error.message );
    res.status( 500 ).json( { error: error.message } );
  }
};
