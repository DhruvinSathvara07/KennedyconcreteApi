const mongoose = require( "mongoose" );

const itemSchema = new mongoose.Schema( {
  title: {
    type: String,
    required: true
  },
  para: {
    type: String,
    required: true
  }
} );

const connectSchema = new mongoose.Schema( {
  title2: {
    type: [ String ],
    required: true
  },
  para2: {
    type: String,
    required: true
  }
} );

const preferredContractorsSchema = new mongoose.Schema( {
  title: {
    type: String,
    required: true
  },
  para: {
    type: String,
    required: true
  },
  howItWorks: [ itemSchema ],
  ourPromise: [ itemSchema ],
  connect: [ connectSchema ],
  projects: [ connectSchema ],
  Professionals: [ connectSchema ]
} );



const preferredContractors = mongoose.model( "preferredContractors", preferredContractorsSchema );
module.exports = preferredContractors;
