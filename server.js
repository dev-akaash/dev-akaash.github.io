const express = require('express');

const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path')


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./build")));

// Handle GET requests to /api route
// app.get("/api", (req, res) => {
// });

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});


server.listen(3001,()=>{
    console.log(`server run  `);

})