const express = require('express');
const router = express.Router();
require("../database/client");
const jsonData = require('../pokedex.json');
const Fighter = require("../models/fightermodel")





router.get("/fighters", async ( req, res) =>{

  try{
    
   res.json(jsonData)
  } catch (e){
    res.status(500).send(e);
  }
})


router.get("/fighters/:id", async ( req, res) =>{

  const { id } = req.params;
  

  try{
    
    if (!id) return res.status(404).send("Fighter not found!");
    res.json(jsonData.find(data => data ['id'] == id))
  } catch (e){
    res.status(500).send(e);
  }

});

router.get("/fighters/:id/:info", (req, res)=>{
  const {id} = req.params
  const fighterInfo = req.params.info;
  
  const foundSubObject = jsonData.fliter(data => data['id'] == id)['0'][fighterInfo];
  
  try{
    if (!id) return res.status(404).send("Fighter not found!");
    res.send(foundSubObject)
  }catch (e) {
    res.status(500).send(e)
  }

})




module.exports = router;
