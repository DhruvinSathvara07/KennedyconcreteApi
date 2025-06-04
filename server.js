const express = require( "express" );
const cors = require( "cors" );
const connectDB = require( "./config/db" );
const formRoutes = require( "./routes/formRoutes" );

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use( cors() );
app.use( express.json() );

// Database
connectDB();

// Routes
app.get( "/", ( req, res ) =>
{
  res.send( "Welcome to the kennedyconcrete Server" );
} );

app.use( "/api", formRoutes );

// Start server
app.listen( PORT, () =>
{
  console.log( `Backend running at http://localhost:${ PORT }` );
} );
