const PreferredContractors = require( "../../../models/ServiceModel/PreferredContractorsModel/PreferredContractorsModel" );

// GET all Preferred Contractors
exports.getPreferredContractors = async ( req, res ) =>
{
  try
  {
    const contractors = await PreferredContractors.find();
    res.status( 200 ).json( contractors );
  } catch ( error )
  {
    res.status( 500 ).json( { error: error.message } );
  }
};

// POST create new Preferred Contractor
exports.createPreferredContractor = async ( req, res ) =>
{
  try
  {
    const data = {
      ...req.body,
      heroimg: req?.file?.filename || undefined
    };


    const contractor = new PreferredContractors( data );


    const saved = await contractor.save();

    res.status( 201 ).json( saved );
  } catch ( error )
  {
    console.error( "Error creating contractor:", error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// PUT update Preferred Contractor by ID
exports.updatePreferredContractor = async ( req, res ) =>
{
  try
  {

    const data = {
      ...req.body,
      ...( req.file && { heroimg: req.file.filename } )
    };


    const updated = await PreferredContractors.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true, runValidators: true }
    );

    if ( !updated )
    {
      return res.status( 404 ).json( { error: "Contractor not found" } );
    }

    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.error( "Error updating contractor:", error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE Preferred Contractor by ID
exports.deletePreferredContractor = async ( req, res ) =>
{
  try
  {
    const deleted = await PreferredContractors.findByIdAndDelete( req.params.id );
    if ( !deleted )
    {
      return res.status( 404 ).json( { error: "Contractor not found" } );
    }
    res.status( 200 ).json( { message: "Contractor deleted successfully" } );
  } catch ( error )
  {
    res.status( 500 ).json( { error: error.message } );
  }
};