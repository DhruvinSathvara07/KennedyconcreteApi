const express = require( "express" );
const router = express.Router();
const cellfill = require( "../controllers/ServiceController/ConcreteProjects/CellfillController/CellfillController" );

router.get( "/cellfill", cellfill.getcellfill );
router.post( "/cellfill", cellfill.postcellfill );
router.put( "/cellfill/:id", cellfill.editcellfill );
router.delete( "/cellfill/:id", cellfill.deletecellfill );

module.exports = router;