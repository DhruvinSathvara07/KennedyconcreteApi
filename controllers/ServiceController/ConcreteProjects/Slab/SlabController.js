const slab = require( "../../../../models/ServiceModel/ConcreteProjects/Slab/SlabModel" );

// GET all slab entries
exports.getSlab = async ( req, res ) =>
{
  try
  {
    const data = await slab.find();
    res.status( 200 ).json( data );
  } catch ( error )
  {
    console.error( "Error fetching slabs:", error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// POST (Create) a new slab entry
exports.postSlab = async ( req, res ) =>
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

    // Multer stores the uploaded file info in req.file
    const heroimg = req.file ? req.file.filename : null;

    const newSlab = new slab( {
      heroimg,
      herotitle,
      title,
      sub_title,
      para,
      video_link,
      btn_text,
      btn_link,
    } );

    const result = await newSlab.save();
    res.status( 201 ).json( result );
  } catch ( error )
  {
    console.error( "Error creating slab:", error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// PUT (Update) a slab entry by ID
exports.editSlab = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const {
      herotitle,
      title,
      sub_title,
      para,
      video_link,
      btn_text,
      btn_link,
    } = req.body;

    const updatedData = {
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
      updatedData.heroimg = req.file.filename; // update only if a new image is uploaded
    }

    const updatedSlab = await slab.findByIdAndUpdate( id, updatedData, {
      new: true,
    } );

    if ( !updatedSlab )
    {
      return res.status( 404 ).json( { message: "Slab not found" } );
    }

    res.status( 200 ).json( updatedSlab );
  } catch ( error )
  {
    console.error( "Error updating slab:", error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE a slab entry by ID
exports.deleteSlab = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const deleted = await slab.findByIdAndDelete( id );

    if ( !deleted )
    {
      return res.status( 404 ).json( { message: "Slab not found" } );
    }

    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.error( "Error deleting slab:", error );
    res.status( 400 ).json( { error: error.message } );
  }
};
