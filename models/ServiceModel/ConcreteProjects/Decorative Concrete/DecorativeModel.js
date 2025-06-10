const mongoose = require( "mongoose" );

const decorativeSchema = new mongoose.Schema( {
  // Hero Section
  heroimg: {
    type: String,
    required: false,
  },
  herotitle: {
    type: String,
    required: false,
  },

  // Sidewalk Content
  title: {
    type: String,
    required: false,
  },
  sub_title: {
    type: String,
    required: false,
  },
  para: {
    type: [ String ],
    required: false,
  },

  // Additional Fields
  video_link: {
    type: String,
    required: false,
  },
  btn_text: {
    type: String,
    required: false,
  },
  btn_link: {
    type: String,
    required: false,
  },
}, { timestamps: true } );
const decorative = mongoose.model( "decorative", decorativeSchema );

module.exports = decorative;  