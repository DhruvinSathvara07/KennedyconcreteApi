const multer = require( "multer" );
const path = require( "path" );

// Set storage engine
const storage = multer.diskStorage( {
  destination: ( req, file, cb ) =>
  {
    cb( null, "uploads/" );
  },
  filename: ( req, file, cb ) =>
  {
    cb( null, Date.now() + path.extname( file.originalname ) );
  }
} );

// File filter (optional, only allow image files)
const fileFilter = ( req, file, cb ) =>
{
  const allowedTypes = /jpeg|jpg|png|webp/;
  const ext = allowedTypes.test( path.extname( file.originalname ).toLowerCase() );
  const mime = allowedTypes.test( file.mimetype );
  if ( ext && mime )
  {
    cb( null, true );
  } else
  {
    cb( new Error( "Only images are allowed" ) );
  }
};

const upload = multer( {
  storage: storage,
  fileFilter: fileFilter
} );

module.exports = upload;
