const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;


app.get('/trigger-api', (req, res) => {
    console.log("Request recieved")
    setTimeout(() => {
      res.send('API call will be made in some minutes.');
    }, 300000); // 5 minutes in milliseconds
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});