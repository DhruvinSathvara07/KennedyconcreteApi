const express = require( "express" );
const router = express.Router();
const BuildingmaterialsAbout = require( "../controllers/ServiceController/PreferredContractors/PreferredContractorsController" );

router.get( "/createPreferredContractor", BuildingmaterialsAbout.getPreferredContractors );
router.post( "/preferredcontractors", BuildingmaterialsAbout.createPreferredContractor );
router.put( "/preferredcontractors/:id", BuildingmaterialsAbout.updatePreferredContractor );
router.delete( "/preferredcontractors/:id", BuildingmaterialsAbout.deletePreferredContractor );

module.exports = router;