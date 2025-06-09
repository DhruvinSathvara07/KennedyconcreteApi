const express = require( "express" );
const router = express.Router();
const {
  getConcretedeiveryArea,
  createConcretedeiveryArea,
  editConcretedeiveryArea,
  deleteConcretedeiveryArea
} = require( "../controllers/ServiceController/Concrete Delivery Areas/DeliveryController" );

router.get( "/concrete-delivery-service", getConcretedeiveryArea );
router.post( "/concrete-delivery-service", createConcretedeiveryArea );
router.put( "/concrete-delivery-service/:id", editConcretedeiveryArea );
router.delete( "/concrete-delivery-service/:id", deleteConcretedeiveryArea );

module.exports = router;