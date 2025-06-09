const commercial = require( "../../../../models/ServiceModel/ConcreteProjects/Commercial/Commercial" );

exports.getcommercial = async ( req, res ) =>
{
  try
  {
    const data = await commercial.find(); // ✅ No conflict
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.postcommercial = async ( req, res ) =>
{
  try
  {
    const data = req.body;
    const result = await commercial.create( data ); // ✅ No conflict
    res.status( 200 ).json( result );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.editcommercial = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const data = req.body;
    const updated = await commercial.findByIdAndUpdate( id, data, { new: true } ); // ✅
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.deletecommercial = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await commercial.findByIdAndDelete( id ); // ✅
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};