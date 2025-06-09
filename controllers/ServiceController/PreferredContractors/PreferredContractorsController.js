const preferredContractors = require( "../../../models/ServiceModel/PreferredContractorsModel/PreferredContractorsModel" );

// GET all preferred contractors
exports.getPreferredContractors = async ( req, res ) =>
{
  try
  {
    const contractors = await preferredContractors.find();
    res.status( 200 ).json( contractors );
  } catch ( error )
  {
    res.status( 500 ).json( { error: error.message } );
  }
};

// POST create new preferred contractor
exports.createPreferredContractor = async ( req, res ) =>
{
  try
  {
    const newContractor = new preferredContractors( req.body );
    const saved = await newContractor.save();
    res.status( 201 ).json( saved );
  } catch ( error )
  {
    res.status( 400 ).json( { error: error.message } );
  }
};

// PUT update preferred contractor by ID
exports.updatePreferredContractor = async ( req, res ) =>
{
  try
  {
    const updated = await preferredContractors.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if ( !updated )
    {
      return res.status( 404 ).json( { error: "Not found" } );
    }
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE preferred contractor by ID
exports.deletePreferredContractor = async ( req, res ) =>
{
  try
  {
    const deleted = await preferredContractors.findByIdAndDelete( req.params.id );
    if ( !deleted )
    {
      return res.status( 404 ).json( { error: "Not found" } );
    }
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    res.status( 500 ).json( { error: error.message } );
  }
};
