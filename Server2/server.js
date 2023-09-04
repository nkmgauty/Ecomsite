// // const express = require('express');
// // const app = express();
// // const port = 3000;


// // const upload = require('./upload');


// // app.post('/upload', upload.single('file'), (req, res) => {
// //     console.log(JSON.stringify(req.file.path))
 
// //   res.json({ message: 'File uploaded successfully!' });
// // });



// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });

// // const fs = require('fs');
  
// // let data = "This is a file containing a collection of stamps.";
  
// // fs.writeFile("books.txt", data, (err) => {
// //   if (err)
// //     console.log(err);
// //   else {
// //     console.log("File written successfully\n");
// //     console.log("The written has the following contents:");
// //     console.log(fs.readFileSync("books.txt", "utf8"));
// //   }
// // });


// const fs = require('fs');
// const data = {table:[{id: 1, name: 'gautham'}]}
// const file_path = './my_data.json'
// writeFile(file_path, data)
// async function writeFile(filename, writedata) {
//   try {
//     await fs.promises.writeFile(filename, JSON.stringify(writedata), 'utf8');
//     console.log('data is written successfully in the file')
//   }
//   catch (err) {
//     console.log('not able to write data in the file ')
//   }
// }