const express = require( "express" );
const router = express.Router();
const upload = require( "../middlewares/upload" );

// InstantController
const Instant = require( "../controllers/InstantController" );

// Other controllers
const About = require( "../controllers/KenddyConcreteController/KenddyConcreteController" );
const cellfill = require( "../controllers/ServiceController/ConcreteProjects/CellfillController/CellfillController" );
const commercial = require( "../controllers/ServiceController/ConcreteProjects/CommercialController/CommercialController" );
const Contact = require( "../controllers/Contactcontroller/ContactController" );
const decorative = require( "../controllers/ServiceController/ConcreteProjects/Decorative Concrete/DecorativeController" );
const driveway = require( "../controllers/ServiceController/ConcreteProjects/Driveway/DrivewayController" );
const formController = require( "../controllers/formController" );
const shotcreate = require( "../controllers/ServiceController/ConcreteProjects/ShotcreateController/ShotcreateController" );
const sidewalk = require( "../controllers/ServiceController/ConcreteProjects/Sidewalk/SidewalkController" );
const slab = require( "../controllers/ServiceController/ConcreteProjects/Slab/SlabController" );
const concretedeliveryAreas = require( "../controllers/ServiceController/Concrete Delivery Areas/DeliveryController" );
const preferredContractors = require( "../controllers/ServiceController/PreferredContractors/PreferredContractorsController" );

// Routes — Instant
router.get( "/", Instant.getInstant );
router.post( "/", Instant.createInstant );
router.put( "/:id", Instant.updateInstant );
router.delete( "/:id", Instant.deleteInstant );

// Routes — About
router.get( "/about", About.getAbout );
router.post( "/about", About.createAbout );
router.put( "/about/:id", About.editAbout );
router.delete( "/about/:id", About.deleteAbout );

// Routes — Cellfill

router.get( "/cellfill", cellfill.getcellfill );
router.post( "/cellfill", upload.single( "heroimg" ), cellfill.postcellfill );
router.put( "/cellfill/:id", upload.single( "heroimg" ), cellfill.editcellfill );
router.delete( "/cellfill/:id", cellfill.deletecellfill );


// Routes — Commercial
router.get( "/commercial", commercial.getcommercial );
router.post( "/commercial", upload.single( "heroimg" ), commercial.postcommercial );
router.put( "/commercial/:id", upload.single( "heroimg" ), commercial.editcommercial );
router.delete( "/commercial/:id", commercial.deletecommercial );

// Routes — Contact
router.get( "/contact", Contact.getContacts );
router.post( "/contact", Contact.createContact );
router.put( "/contact/:id", Contact.editContact );
router.delete( "/contact/:id", Contact.deleteContact );
router.put( "/update-locations/:id", Contact.updateLocations );

// Routes — Decorative
router.get( "/decorative", decorative.getDecorative );
router.post( "/decorative", upload.single( "heroimg" ), decorative.postDecorative );
router.put( "/decorative/:id", upload.single( "heroimg" ), decorative.editDecorative );
router.delete( "/decorative/:id", decorative.deleteDecorative );


// Routes — Driveway
router.get( "/driveway", driveway.getDriveway );
router.post( "/driveway", upload.single( "heroimg" ), driveway.postDriveway );
router.put( "/driveway/:id", upload.single( "heroimg" ), driveway.editDriveway );
router.delete( "/driveway/:id", driveway.deleteDriveway );

// Routes — Form
router.post( "/form", formController.submitForm );

// Routes — Preferred Contractors (from BuildingmaterialsAbout)
router.get( "/preferredcontractors", preferredContractors.getPreferredContractors );
router.post( "/preferredcontractors", upload.single( "heroimg" ), preferredContractors.createPreferredContractor );
router.put( "/preferredcontractors/:id", upload.single( "heroimg" ), preferredContractors.updatePreferredContractor );
router.delete( "/preferredcontractors/:id", preferredContractors.deletePreferredContractor );

// Routes — Shotcreate
router.get( "/shotcreate", shotcreate.getShotcreate );
router.post( "/shotcreate", upload.single( "heroimg" ), shotcreate.postShotcreate );
router.put( "/shotcreate/:id", upload.single( "heroimg" ), shotcreate.editShotcreate );
router.delete( "/shotcreate/:id", shotcreate.deleteShotcreate );

// Routes — Sidewalk
router.get( "/sidewalk", sidewalk.getsidewalk );
router.post( "/sidewalk", upload.single( "heroimg" ), sidewalk.postsidewalk );
router.put( "/sidewalk/:id", upload.single( "heroimg" ), sidewalk.editsidewalk );
router.delete( "/sidewalk/:id", sidewalk.deletesidewalk );

// Routes — Slab
router.get( "/slab", slab.getSlab );
router.post( "/slab", upload.single( "heroimg" ), slab.postSlab );
router.put( "/slab/:id", upload.single( "heroimg" ), slab.editSlab );
router.delete( "/slab/:id", slab.deleteSlab );

// Routes — Concrete Delivery Areas
router.get( "/delivery", concretedeliveryAreas.getConcretedeiveryArea );
router.post( "/delivery", upload.single( "heroimg" ), concretedeliveryAreas.createConcretedeiveryArea );
router.put( "/delivery/:id", upload.single( "heroimg" ), concretedeliveryAreas.editConcretedeiveryArea );
router.delete( "/delivery/:id", concretedeliveryAreas.deleteConcretedeiveryArea );

module.exports = router;
