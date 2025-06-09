const express = require( "express" );
const router = express.Router();
const driveway = require( "../controllers/ServiceController/ConcreteProjects/Driveway/DrivewayController" );

router.get( "/driveway", driveway.getdriveway );
router.post( "/driveway", driveway.postdriveway );
router.put( "/driveway/:id", driveway.editdriveway );
router.delete( "/driveway/:id", driveway.deletedriveway );

module.exports = router;