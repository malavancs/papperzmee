
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/papperzmee-UI'));

app.get('/*', function(req,res) {
    const fs = require('fs');

fs.readdir(__dirname+"/"+"dist", (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
res.sendFile(path.join(__dirname,'/dist/papperzmee-UI/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT);
