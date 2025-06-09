const shotcreate = require( "../../../../models/ServiceModel/ConcreteProjects/Shotcreate/ShotcreateModel" );

exports.getShotcreate = async ( req, res ) =>
{
  try
  {
    const shotcreateData = await shotcreate.find();
    res.status( 200 ).json( shotcreateData );
  }
  catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

exports.postShotcreate = async ( req, res ) =>
{
  try
  {
    const shotcreateData = await shotcreate.create( req.body );
    res.status( 200 ).json( shotcreateData );
  }
  catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

exports.editShotcreate = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const shotcreateData = await shotcreate.findByIdAndUpdate( id, req.body, { new: true } );
    res.status( 200 ).json( shotcreateData );
  }
  catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

exports.deleteShotcreate = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await shotcreate.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  }
  catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

