
// const express = require("express");
// const bodyParser = require("body-parser");

// const itemRoutes = require("./Routes/Item");

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.use("/items", itemRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

// app.listen(port, () => {
//   console.log(`Server started at port http://localhost:${port}`);
// });

const express = require('express');
const app = express();
app.get("/", (req, res) => {  
   res.send("hello world");
});
app.listen(5000, () => { 
    console.log('Started on port 5000');
});
