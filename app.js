const PORT = 8000
const express = require(`express`)
const app = express()
const cors = require(`cors`)
const bodyParser = require('body-parser')
app.use(cors())
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const adminRoute = require('./routes/adminRoutes')
const menuRoute = require('./routes/foodRoutes')
const orderRoute = require('./routes/orderRoutes')

app.use(`/admin`, adminRoute)
app.use(`/food`, menuRoute)
app.use(`/order`, orderRoute)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})