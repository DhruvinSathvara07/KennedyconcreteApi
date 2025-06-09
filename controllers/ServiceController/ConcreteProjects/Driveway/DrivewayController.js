const driveway = require( "../../../../models/ServiceModel/ConcreteProjects/Driveway/drivewayModel" );


exports.getdriveway = async ( req, res ) =>
{
  try
  {
    const data = await driveway.find(); // ✅ No conflict
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.postdriveway = async ( req, res ) =>
{
  try
  {
    const data = req.body;
    const result = await driveway.create( data ); // ✅ No conflict
    res.status( 200 ).json( result );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.editdriveway = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const data = req.body;
    const updated = await driveway.findByIdAndUpdate( id, data, { new: true } ); // ✅
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.deletedriveway = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await driveway.findByIdAndDelete( id ); // ✅
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};