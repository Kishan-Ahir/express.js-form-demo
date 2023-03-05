let express = require("express");
let bodyparser = require("body-parser");
let app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use("/add-product",(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label for="title">Product name:</label><input type="text" name="title"><label for="size">Size of Product</label><input type="text" name="size"><button type="submit">Add Product</button></form>');
})

app.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

app.use("/",(req,res,next)=>{
    res.send('<html><head><title>Homepage</title></head><body><h1>This is a homepage.</h1></body></html>')
})

app.listen(3000);

