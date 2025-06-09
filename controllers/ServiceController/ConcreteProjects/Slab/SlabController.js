const slab = require( "../../../../models/ServiceModel/ConcreteProjects/Slab/SlabModel" );

exports.getslab = async ( req, res ) =>
{
  try
  {
    const data = await slab.find(); // ✅ No conflict
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.postslab = async ( req, res ) =>
{
  try
  {
    const data = req.body;
    const result = await slab.create( data ); // ✅ No conflict
    res.status( 200 ).json( result );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.editslab = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const data = req.body;
    const updated = await slab.findByIdAndUpdate( id, data, { new: true } ); // ✅
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.deletesslab = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await slab.findByIdAndDelete( id ); // ✅
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};
