const commercial = require( "../../../../models/ServiceModel/ConcreteProjects/Commercial/Commercial" );

// GET all
exports.getcommercial = async ( req, res ) =>
{
  try
  {
    const data = await commercial.find();
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// POST with image upload
exports.postcommercial = async ( req, res ) =>
{
  try
  {
    const { herotitle, title, sub_title, para, video_link, btn_text, btn_link } = req.body;
    const heroimg = req.file ? req.file.filename : null;

    const newData = await commercial.create( {
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
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// PUT with optional image update
exports.editcommercial = async ( req, res ) =>
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

    const updated = await commercial.findByIdAndUpdate( id, updateData, { new: true } );
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE
exports.deletecommercial = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await commercial.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.error( error );
    res.status( 400 ).json( { error: error.message } );
  }
};
