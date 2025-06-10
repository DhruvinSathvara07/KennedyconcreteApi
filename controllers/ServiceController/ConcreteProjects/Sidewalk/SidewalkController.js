const SidewalkModel = require( "../../../../models/ServiceModel/ConcreteProjects/Sidewalk/sidewalkModel" );

// GET all sidewalks
exports.getsidewalk = async ( req, res ) =>
{
  try
  {
    const data = await SidewalkModel.find();
    const baseUrl = `${ req.protocol }://${ req.get( "host" ) }`;

    const formatted = data.map( item => ( {
      ...item._doc,
      heroimg: item.heroimg ? `${ baseUrl }/uploads/${ item.heroimg }` : null,
    } ) );

    res.status( 200 ).json( formatted );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// POST sidewalk with image
exports.postsidewalk = async ( req, res ) =>
{
  try
  {
    const { title, sub_title, para, herotitle, video_link, btn_text, btn_link } = req.body;
    const heroimg = req.file ? req.file.filename : null;

    const newSidewalk = new SidewalkModel( {
      title,
      sub_title,
      para,
      herotitle,
      heroimg,
      video_link,
      btn_text,
      btn_link,
    } );

    const result = await newSidewalk.save();
    res.status( 200 ).json( result );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// PUT (edit)
exports.editsidewalk = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const updateData = { ...req.body };

    if ( req.file )
    {
      updateData.heroimg = req.file.filename;
    }

    const updated = await SidewalkModel.findByIdAndUpdate( id, updateData, { new: true } );
    res.status( 200 ).json( updated );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};

// DELETE
exports.deletesidewalk = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    await SidewalkModel.findByIdAndDelete( id );
    res.status( 200 ).json( { message: "Deleted successfully" } );
  } catch ( error )
  {
    console.log( error );
    res.status( 400 ).json( { error: error.message } );
  }
};
