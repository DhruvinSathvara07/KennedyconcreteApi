const express = require( "express" );
const router = express.Router();
const {
  getInstant,
  createInstant,
  updateInstant,
  deleteInstant,
} = require( "../controllers/InstantController" );

router.get( "/", getInstant );
router.post( "/", createInstant );
router.put( "/:id", updateInstant );
router.delete( "/:id", deleteInstant );

module.exports = router;
