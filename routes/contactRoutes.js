const express = require( "express" );
const router = express.Router();
const Contact = require( "../controllers/Contactcontroller/ContactController" );

router.get( "/contact", Contact.getContacts );
router.post( "/contact", Contact.createContact );
router.put( "/contact/:id", Contact.editContact );
router.delete( "/contact/:id", Contact.deleteContact );
router.put( "/update-locations/:id", Contact.updateLocations );

module.exports = router;  