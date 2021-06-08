const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const SeedDb = require('./seed');

//Routes
const blogRoutes = require('./Routes/Blog');

// SeedDb();

mongoose.connect('mongodb://localhost:27017/ng-blog-app', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Db Connected");
})
.catch((e)=>{
    console.log("DB not Connected")
    console.log(e)
})


app.use(blogRoutes);



app.listen(8080,()=>{
    console.log("Running")
})
