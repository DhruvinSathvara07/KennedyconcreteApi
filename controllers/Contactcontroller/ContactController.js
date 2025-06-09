const Contact = require( "../../models/ContactModel/Contact" );

// Create a new Contact entry
exports.createContact = async ( req, res ) =>
{
  try
  {
    const data = req.body;
    const contact = await Contact.create( data );
    res.status( 201 ).json( contact );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// Get all Contact entries
exports.getContacts = async ( req, res ) =>
{
  try
  {
    const contacts = await Contact.find();
    res.status( 200 ).json( contacts );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// Edit full Contact document by ID
exports.editContact = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const data = req.body;

    const contact = await Contact.findByIdAndUpdate( id, data, { new: true } );
    if ( !contact )
    {
      return res.status( 404 ).json( { error: "Contact entry not found" } );
    }
    res.status( 200 ).json( contact );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// Delete Contact entry by ID
exports.deleteContact = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete( id );
    if ( !contact )
    {
      return res.status( 404 ).json( { error: "Contact entry not found" } );
    }
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// Optional: Update only the locations array (or any field you want)
exports.updateLocations = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const locations = req.body.locations;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { locations },
      { new: true }
    );

    if ( !contact )
    {
      return res.status( 404 ).json( { error: "Contact entry not found" } );
    }

    res.status( 200 ).json( { message: "Locations updated successfully", contact } );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};
