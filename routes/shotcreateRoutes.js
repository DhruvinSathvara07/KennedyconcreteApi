const express = require( "express" );
const router = express.Router();
const shotcreate = require( "../controllers/ServiceController/ConcreteProjects/ShotcreateController/ShotcreateController" );

router.get( "/shotcreate", shotcreate.getShotcreate );
router.post( "/shotcreate", shotcreate.postShotcreate );
router.put( "/shotcreate/:id", shotcreate.editShotcreate );
router.delete( "/shotcreate/:id", shotcreate.deleteShotcreate );

module.exports = router;