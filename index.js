const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API using Nodemon");

});


mongoose.connect("mongodb+srv://alexmarcondes1111:BRaBsXTBTSuX2lfe@backenddb.i2enn.mongodb.net/NodeApi?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to the Database...");

        app.listen(3000, () => {
            console.log('Server is running on port 3000');

        });
    })
    .catch(() => {
        console.log('ERROR Connection Fail ...');
    });