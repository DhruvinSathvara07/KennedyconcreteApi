const mongoose = require( "mongoose" );

const kenddyConcreteSchema = new mongoose.Schema( {
  aboutTitle: {
    type: String,
    required: true
  }, aboutSubTitle: {
    type: String,
    required: true
  }, paraone: {
    type: String,
    required: true
  }, paratwo: {
    type: String,
    required: true
  }, locationtitle: {
    type: String,
    required: true
  }, button: [
    {
      btn_text: {
        type: String,
        default: "GET A QUOTE",
      },
      btn_href: {
        type: String,
        default: "#",
      },
      btn_bgColor: {
        type: String,
        default: "#DE0B18",
      },
      btn_textColor: {
        type: String,
        default: "#fff",
      },
      btn_hoverBgColor: {
        type: String,
        default: "#000",
      },
      btn_hoverTextColor: {
        type: String,
        default: "#fff",
      },
      btn_dotColor: {
        type: String,
        default: "#000",
      }
    }
  ]

} );

const About = mongoose.model( "KenddyConcrete", kenddyConcreteSchema );

module.exports = About;