const cellfill = require( "../../../../models/ServiceModel/ConcreteProjects/Cellfill/CellfillModel" );

exports.getcellfill = async ( req, res ) =>
{
  try
  {
    const data = await cellfill.find(); // ✅ No conflict
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.postcellfill = async ( req, res ) =>
{
  try
  {
    const data = req.body;
    const result = await cellfill.create( data ); // ✅ No conflict
    res.status( 200 ).json( result );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.editcellfill = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const data = req.body;
    const updated = await cellfill.findByIdAndUpdate( id, data, { new: true } ); // ✅
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.deletecellfill = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await cellfill.findByIdAndDelete( id ); // ✅
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};