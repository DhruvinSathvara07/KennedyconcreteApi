const express = require( "express" );
const router = express.Router();
const {
  getInstant,
  createInstant,
  updateInstant,
  deleteInstant,
} = require( "../controllers/InstantController" );
const {
  createKennedyConcrete,
  getKennedyConcrete,
  getKenneiyConcreteById,
  getActiveKennedyConcrete,
  updateKennedyConcrete,
  updateKenneiyConcreteLocations,
  deleteKennedyConcrete,
  toggleKenneiyConcreteStatus
} = require( "../controllers/KenddyConcreteController/KenddyConcreteController" );

router.get( "/", getInstant );
router.post( "/", createInstant );
router.put( "/:id", updateInstant );
router.delete( "/:id", deleteInstant );




module.exports = router;
