const serviceConcrete = require( "../../../models/ServiceModel/Concrete Delivery Areas/ConcreteDeliveryAreas" );

// GET
exports.getConcretedeiveryArea = async ( req, res ) =>
{
  try
  {
    const data = await serviceConcrete.find();
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// POST with image upload
exports.createConcretedeiveryArea = async ( req, res ) =>
{
  try
  {
    const { herotitle, title, sub_title, para, video_link, btn_text, btn_link } = req.body;
    const heroimg = req.file ? req.file.filename : null;

    const newArea = await serviceConcrete.create( {
      heroimg,
      herotitle,
      title,
      sub_title,
      para,
      video_link,
      btn_text,
      btn_link,
    } );

    res.status( 200 ).json( newArea );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// PUT with optional image
exports.editConcretedeiveryArea = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const { herotitle, title, sub_title, para, video_link, btn_text, btn_link } = req.body;

    const updateData = {
      herotitle,
      title,
      sub_title,
      para,
      video_link,
      btn_text,
      btn_link,
    };

    if ( req.file )
    {
      updateData.heroimg = req.file.filename;
    }

    const updated = await serviceConcrete.findByIdAndUpdate( id, updateData, { new: true } );
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE
exports.deleteConcretedeiveryArea = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await serviceConcrete.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};
