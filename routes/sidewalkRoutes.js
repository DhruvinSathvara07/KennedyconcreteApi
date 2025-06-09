const exporess = require( "express" );
const router = exporess.Router();
const sidewalk = require( "../controllers/ServiceController/ConcreteProjects/Sidewalk/SidewalkController" );

router.get( "/sidewalk", sidewalk.getsidewalk );
router.post( "/sidewalk", sidewalk.postsidewalk );
router.put( "/sidewalk/:id", sidewalk.editsidewalk );
router.delete( "/sidewalk/:id", sidewalk.deletesidewalk );

module.exports = router;