const express = require( "express" );
const cors = require( "cors" );
const path = require( "path" );
const connectDB = require( "./config/db" );
const formRoutes = require( "./routes/formRoutes" );
const instantRoutes = require( "./routes/instantRoutes" );
const about = require( "./routes/aboutRoutes" );
const contact = require( "./routes/contactRoutes" );
const concretedeliveryAreas = require( "./routes/concretedeliveryareasRoutes" );
const sidewalk = require( "./routes/sidewalkRoutes" );
const driveway = require( "./routes/drivewayRoutes" );
const slab = require( "./routes/slabRoutes" );
const cellfill = require( "./routes/cellfillRoutes" );
const commercial = require( "./routes/commercialRoutes" );
const shotcreate = require( "./routes/shotcreateRoutes" );
const decorative = require( "./routes/decoratieRoutes" );
const aboutBuildingmatarils = require( "./routes/BuildingmaterialsAbout" );
const preferredcontractor = require( "./routes/PreferredContractorRoutes" );
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