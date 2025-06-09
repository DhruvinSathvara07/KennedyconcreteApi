const serviceConcrete = require( "../../../models/ServiceModel/Concrete Delivery Areas/ConcreteDeliveryAreas" );

exports.getConcretedeiveryArea = async ( req, res ) =>
{
  try
  {
    const concreteDeliveryAreas = await serviceConcrete.find();
    res.status( 200 ).json( concreteDeliveryAreas );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.createConcretedeiveryArea = async ( req, res ) =>
{
  try
  {
    const data = req.body;
    const concreteDeliveryAreas = await serviceConcrete.create( data );
    res.status( 200 ).json( concreteDeliveryAreas );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.editConcretedeiveryArea = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const data = req.body;
    const concreteDeliveryAreas = await serviceConcrete.findByIdAndUpdate( id, data, { new: true } );
    res.status( 200 ).json( concreteDeliveryAreas );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

exports.deleteConcretedeiveryArea = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const concreteDeliveryAreas = await serviceConcrete.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};  