const decorative = require( "../../.././../models/ServiceModel/ConcreteProjects/Decorative Concrete/DecorativeModel" );

exports.getDecorative = async ( req, res ) =>
{
  try
  {
    const decorativeData = await decorative.find();
    res.status( 200 ).json( decorativeData );
  }
  catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

exports.postDecorative = async ( req, res ) =>
{
  try
  {
    const decorativeData = await decorative.create( req.body );
    res.status( 200 ).json( decorativeData );
  }
  catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

exports.editDecorative = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const decorativeData = await decorative.findByIdAndUpdate( id, req.body, { new: true } );
    res.status( 200 ).json( decorativeData );
  }
  catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

exports.deleteDecorative = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await decorative.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  }
  catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};