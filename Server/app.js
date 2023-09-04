const multer = require('multer');
const upload = multer({dest:'uploads/'}).single("demo_image");


app.post("/image", (req, res) => {
    upload(req, res, (err) => {
     if(err) {
       res.status(400).send("Something went wrong!");
     }
     res.send(req.file);
   });
 });