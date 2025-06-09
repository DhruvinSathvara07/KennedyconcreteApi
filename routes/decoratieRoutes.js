const express = require( "express" );
const router = express.Router();
const decorative = require( "../controllers/ServiceController/ConcreteProjects/Decorative Concrete/DecorativeController" );

router.get( "/decorative", decorative.getDecorative );
router.post( "/decorative", decorative.postDecorative );
router.put( "/decorative/:id", decorative.editDecorative );
router.delete( "/decorative/:id", decorative.deleteDecorative );

module.exports = router;