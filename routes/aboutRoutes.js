const express = require( "express" );
const router = express.Router();
const About = require( "../controllers/KenddyConcreteController/KenddyConcreteController" );

router.get( "/about", About.getAbout );
router.post( "/about", About.createAbout );
router.put( "/about/:id", About.editAbout );
router.delete( "/about/:id", About.deleteAbout );
// router.put( "/update-button/:id", updateButton );

module.exports = router;