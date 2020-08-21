const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
const mongoose = require('mongoose');
const connectDb = require("./connection");
const User = require("./models-mongodb/User.model");
const { Product } = require('./sequelize');
var bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('DATA PIDE');
  var obj = {
      "prueba": true
  };
  res.send(obj);
})

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send({users: users});
 });

app.get("/user-create", async (req, res) => {
  console.log('creando usuario!')
  const user = new User({ username: "userTest" });
  const response = await user.save();

  res.send(response);
});

app.post('/product-create', async (req, res) => {
  console.log('EL NAME',)
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price
  });
  res.send('Producto creado exitosamente!');
});

app.get('/get-products', async (req,res) => {
  const products = await Product.findAll();
  res.send({products: products});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  connectDb().then(() => {
    console.log("MongoDb connected");
    });
})

