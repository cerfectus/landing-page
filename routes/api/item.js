const express = require("express")
const router = express.Router()

//traer el modelo de datos
const Item = require("../../models/Item")

//ruta al array de datos
router.get("/", (req,res)=> {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))

})
//ruta para crear un item
router.post("/", (req,res)=> {
    const newItem = new Item ({
        name: req.body.name
    })
    newItem.save().then(item => res.json(item))
})
//rut para borrar un item
router.delete("/:id", (req,res)=> {
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({succes:true})))
    .catch(err => res.status(404).json({success: false}))
})
//exportar las rutas
module.exports = router