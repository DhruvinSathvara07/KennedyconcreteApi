const Instant = require( "../models/Instant" );

// CREATE a new Instant entry
exports.createInstant = async ( req, res ) =>
{
  try
  {

    const { text, subtitle, btntext, title, Herotitle } = req.body;

    if ( !text || !subtitle || !btntext || !title || !Herotitle )
    {
      return res.status( 400 ).json( {
        error: "All fields are required: text, subtitle, btntext, title"
      } );
    }

    const newInstant = new Instant( {
      Herotitle,
      text,
      subtitle,
      btntext,
      title
    } );

    const savedInstant = await newInstant.save();

    res.status( 201 ).json( savedInstant );
  } catch ( error )
  {
    res.status( 400 ).json( { error: error.message } );
  }
};

// READ all Instant entries
exports.getInstant = async ( req, res ) =>
{
  try
  {
    const instants = await Instant.find();

    res.status( 200 ).json( instants );
  } catch ( error )
  {
    console.error( "GET ERROR:", error );
    res.status( 500 ).json( { error: error.message } );
  }
};

// UPDATE an Instant entry by ID
exports.updateInstant = async ( req, res ) =>
{
  const { id } = req.params;
  const { text, subtitle, btntext, title, Herotitle } = req.body;

  try
  {
    const existingInstant = await Instant.findById( id );
    if ( !existingInstant )
    {
      return res.status( 404 ).json( { error: "Instant not found" } );
    }

    const updated = await Instant.findByIdAndUpdate(
      id,
      { text, subtitle, btntext, title, Herotitle },
      { new: true, runValidators: true }
    );


    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.error( "UPDATE ERROR:", error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE an Instant entry by ID
exports.deleteInstant = async ( req, res ) =>
{
  const { id } = req.params;
  try
  {
    const deletedInstant = await Instant.findByIdAndDelete( id );
    if ( !deletedInstant )
    {
      return res.status( 404 ).json( { error: "Instant not found" } );
    }
    res.status( 200 ).json( { message: "Deleted successfully", deletedInstant } );
  } catch ( error )
  {

    res.status( 400 ).json( { error: error.message } );
  }
};