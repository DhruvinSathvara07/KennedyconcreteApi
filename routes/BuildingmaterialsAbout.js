const express = require( "express" );
const router = express.Router();
const BuildingmaterialsAbout = require( "../controllers/ServiceController/BuildingmaterialsController/AboutController/AboutSectionController" );

router.get( "/buildingmaterials/about", BuildingmaterialsAbout.getAboutSection );
router.post( "/buildingmaterials/about", BuildingmaterialsAbout.createAboutSection );
router.put( "/buildingmaterials/about/:id", BuildingmaterialsAbout.updateAboutSection );
router.delete( "/buildingmaterials/about/:id", BuildingmaterialsAbout.deleteAboutSection );

module.exports = router;