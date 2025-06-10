const mongoose = require( "mongoose" );

const preferredContractorsSchema = new mongoose.Schema( {
  herotitle: String,
  heroimg: String,
  blacktext: String,
  red: String,
  para: String,
  blacktitle: String,
  redtitle: String,
  firstlinetitle: String,
  firstline: String,
  secondlinetitle: String,
  secondline: String,
  thirdlinetitle: String,
  thirdline: String,
  blacktitleone: String,
  redtitletwo: String,
  line1title: String,
  line1: String,
  line2title: String,
  line2: String,
  line3title: String,
  line3: String,
  blacktextconnect: String,
  redtextconnect: String,
  paraone: String,
  projectblacktext: String,
  projectredtext: String,
  projectpara: String,
  getmatchedtext: String,
  concreteredtext: String,
  paratwo: String,
  video_link: String
} );

const preferredcontractor = mongoose.model( "preferredcontractor", preferredContractorsSchema );
module.exports = preferredcontractor;