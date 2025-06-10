const cellfill = require( "../../../../models/ServiceModel/ConcreteProjects/Cellfill/CellfillModel" );

// GET
exports.getcellfill = async ( req, res ) =>
{
  try
  {
    const data = await cellfill.find();
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// POST (with image upload)
exports.postcellfill = async ( req, res ) =>
{
  try
  {
    const { herotitle, title, sub_title, para, video_link, btn_text, btn_link } = req.body;
    const heroimg = req.file ? req.file.filename : null;

    const newData = await cellfill.create( {
      heroimg,
      herotitle,
      title,
      sub_title,
      para,
      video_link,
      btn_text,
      btn_link,
    } );

    res.status( 200 ).json( newData );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// PUT (with optional image update)
exports.editcellfill = async ( req, res ) =>
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

    const updated = await cellfill.findByIdAndUpdate( id, updateData, { new: true } );
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE
exports.deletecellfill = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await cellfill.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};
