const express = require("express"); 
const mongoose = require("mongoose")
// const compression = require('compression')

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use(express.static("public"));

// app.use(compression({ filter: shouldCompress }))
 
// function shouldCompress (req, res) {
//   if (req.headers['x-no-compression']) {
//     // don't compress responses with this request header
//     return false
//   }
 
//   // fallback to standard filter function
//   return compression.filter(req, res)
// }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true, 
    useFindAndModify: false
});

// routes
app.use(require("./public/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  