const express = require( "express" );
const router = express.Router();
const slab = require( "../controllers/ServiceController/ConcreteProjects/Slab/SlabController" );

router.get( "/slab", slab.getslab );
router.post( "/slab", slab.postslab );
router.put( "/slab/:id", slab.editslab );
router.delete( "/slab/:id", slab.deletesslab );

module.exports = router;