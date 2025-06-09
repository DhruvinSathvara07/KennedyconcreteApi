const express = require( "express" );
const router = express.Router();

const commercial = require( "../controllers/ServiceController/ConcreteProjects/CommercialController/CommercialController" );

router.get( "/commercial", commercial.getcommercial );
router.post( "/commercial", commercial.postcommercial );
router.put( "/commercial/:id", commercial.editcommercial );
router.delete( "/commercial/:id", commercial.deletecommercial );

module.exports = router;