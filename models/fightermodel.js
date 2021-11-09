const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const fighterSchema = new Schema({
    first_name: {type: String, min: 2, max:58, required: true},
    last_name:{ type: String, min: 2, max: 58, required: true},
    active: { type: Boolean, default: true },
    class_type: {
      type: String,
      enum: ["Champion", "Rocket", "Psychic", "Rival"],
    },
    
  },
  {timestamps: true}
  )
  
  const Fighter = mongoose.model("fighter", fighterSchema)
  //router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
  //});
  
  module.exports = Fighter;