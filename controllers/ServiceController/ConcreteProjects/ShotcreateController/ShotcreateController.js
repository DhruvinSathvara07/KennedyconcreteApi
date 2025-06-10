const shotcreate = require( "../../../../models/ServiceModel/ConcreteProjects/Shotcreate/ShotcreateModel" );

// GET all entries
exports.getShotcreate = async ( req, res ) =>
{
  try
  {
    const shotcreateData = await shotcreate.find();
    res.status( 200 ).json( shotcreateData );
  } catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

// POST new entry
exports.postShotcreate = async ( req, res ) =>
{
  try
  {
    const {
      herotitle,
      title,
      sub_title,
      video_link,
      btn_text,
      btn_link,
    } = req.body;

    const heroimg = req.file ? req.file.filename : null;

    const newEntry = await shotcreate.create( {
      heroimg,
      herotitle,
      title,
      sub_title,
      video_link,
      btn_text,
      btn_link,
    } );

    res.status( 200 ).json( newEntry );
  } catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

// PUT (edit) entry by ID
exports.editShotcreate = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;

    const updateData = {
      ...req.body,
    };

    if ( req.file )
    {
      updateData.heroimg = req.file.filename;
    }

    const updatedEntry = await shotcreate.findByIdAndUpdate( id, updateData, {
      new: true,
    } );

    res.status( 200 ).json( updatedEntry );
  } catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

// DELETE entry by ID
exports.deleteShotcreate = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await shotcreate.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};
