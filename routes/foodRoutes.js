const express = require(`express`)
const app = express()
const auth = require('../controllers/authcontroller')
const foodController = require('../controllers/foodcontroller')

app.get("/get/", foodController.getMenu)
app.get("/:search", foodController.searchMenu)
app.post("/", auth.authVerify, foodController.addMenu)
app.put("/:id", auth.authVerify, foodController.updateMenu)
app.delete("/:id", auth.authVerify, foodController.deleteMenu)

module.exports = app