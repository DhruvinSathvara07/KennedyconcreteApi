const SidewalkModel = require( "../../../../models/ServiceModel/ConcreteProjects/Sidewalk/sidewalkModel" );

exports.getsidewalk = async ( req, res ) =>
{
  try
  {
    const data = await SidewalkModel.find(); // ✅ No conflict
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.postsidewalk = async ( req, res ) =>
{
  try
  {
    const data = req.body;
    const result = await SidewalkModel.create( data ); // ✅ No conflict
    res.status( 200 ).json( result );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.editsidewalk = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const data = req.body;
    const updated = await SidewalkModel.findByIdAndUpdate( id, data, { new: true } ); // ✅
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.deletesidewalk = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await SidewalkModel.findByIdAndDelete( id ); // ✅
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};
