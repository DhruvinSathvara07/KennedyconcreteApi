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
// POST with image
exports.postDecorative = async ( req, res ) =>
{
  try
  {
    const { herotitle, title, sub_title, para, video_link, btn_text, btn_link } = req.body;

    const newDecorative = new decorative( {
      heroimg: req.file ? req.file.filename : "", // multer saves file
      herotitle,
      title,
      sub_title,
      para: Array.isArray( para ) ? para : [ para ],
      video_link,
      btn_text,
      btn_link,
    } );

    await newDecorative.save();
    res.status( 200 ).json( newDecorative );
  } catch ( error )
  {
    res.status( 500 ).json( { message: error.message } );
  }
};

// PUT with image (optional update)
exports.editDecorative = async ( req, res ) =>
{
  try
  {
    const { id } = req.params;
    const updatedData = {
      ...req.body,
      heroimg: req.file ? req.file.filename : undefined, // update only if new file provided
      para: Array.isArray( req.body.para ) ? req.body.para : [ req.body.para ],
    };

    const updatedDecorative = await decorative.findByIdAndUpdate( id, updatedData, { new: true } );
    res.status( 200 ).json( updatedDecorative );
  } catch ( error )
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