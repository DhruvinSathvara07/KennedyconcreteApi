const driveway = require( "../../../../models/ServiceModel/ConcreteProjects/Driveway/drivewayModel" );

// GET all entries
exports.getDriveway = async ( req, res ) =>
{
  try
  {
    const data = await driveway.find();
    res.status( 200 ).json( data );
  } catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

// POST new entry
exports.postDriveway = async ( req, res ) =>
{
  try
  {
    const {
      herotitle,
      title,
      sub_title,
      para,
      video_link,
      btn_text,
      btn_link,
    } = req.body;

    const heroimg = req.file ? req.file.filename : null;

    const newEntry = await driveway.create( {
      heroimg,
      herotitle,
      title,
      sub_title,
      para: Array.isArray( para ) ? para : [ para ], // ensure array
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
exports.editDriveway = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const updateData = {
      ...req.body,
    };

    // If file is uploaded, update heroimg
    if ( req.file )
    {
      updateData.heroimg = req.file.filename;
    }

    // Ensure para is always an array
    if ( updateData.para && !Array.isArray( updateData.para ) )
    {
      updateData.para = [ updateData.para ];
    }

    const updatedEntry = await driveway.findByIdAndUpdate( id, updateData, {
      new: true,
    } );

    res.status( 200 ).json( updatedEntry );
  } catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

// DELETE entry by ID
exports.deleteDriveway = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await driveway.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};
