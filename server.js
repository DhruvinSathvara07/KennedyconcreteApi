const express = require( "express" );
const cors = require( "cors" );
const path = require( "path" );
const connectDB = require( "./config/db" );
const app = express();
const PORT = process.env.PORT || 5000;

const formRoutes = require( "./routes/routes" );
const instantRoutes = require( "./routes/routes" );
const about = require( "./routes/routes" );
const contact = require( "./routes/routes" );
const concretedeliveryAreas = require( "./routes/routes" );
const sidewalk = require( "./routes/routes" );
const driveway = require( "./routes/routes" );
const slab = require( "./routes/routes" );
const cellfill = require( "./routes/routes" );
const commercial = require( "./routes/routes" );
const shotcreate = require( "./routes/routes" );
const decorative = require( "./routes/routes" );
const aboutBuildingmatarils = require( "./routes/routes" );
const preferredcontractor = require( "./routes/routes" );

// Middleware
app.use( cors() );
app.use( express.json() );
// Serve static files from uploads directory
app.use( '/uploads', express.static( path.join( __dirname, 'uploads' ) ) );
app.use( express.urlencoded( { extended: true } ) );

// Database
connectDB();

app.use( "/uploads", express.static( "uploads" ) );
// Routes
app.get( "/", ( req, res ) =>
{
  res.send( "Welcome to the kennedyconcrete Server" );
} );


app.use( "/api", formRoutes );
app.use( "/instant", instantRoutes );
app.use( "/", about );
app.use( "/", contact );
app.use( "/", concretedeliveryAreas );
app.use( "/", sidewalk );
app.use( "/", driveway );
app.use( "/", slab );
app.use( "/", cellfill );
app.use( "/", commercial );
app.use( "/", shotcreate );
app.use( "/", decorative );
app.use( "/", aboutBuildingmatarils );
app.use( "/", preferredcontractor );

// Start server
app.listen( PORT, () =>
{
  console.log( `Backend running at http://localhost:${ PORT }` );
} );