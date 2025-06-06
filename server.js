const express = require( "express" );
const cors = require( "cors" );
const path = require( "path" );
const connectDB = require( "./config/db" );
const formRoutes = require( "./routes/formRoutes" );
const instantRoutes = require( "./routes/instantRoutes" );

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use( cors() );
app.use( express.json() );

// Serve static files from uploads directory
app.use( '/uploads', express.static( path.join( __dirname, 'uploads' ) ) );

// Database
connectDB();

// Routes
app.get( "/", ( req, res ) =>
{
  res.send( "Welcome to the kennedyconcrete Server" );
} );

app.use( "/api", formRoutes );
app.use( "/instant", instantRoutes );

// Start server
app.listen( PORT, () =>
{
  console.log( `Backend running at http://localhost:${ PORT }` );
} );