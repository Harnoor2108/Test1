const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT , () => {

    console.log(`Express http server listening on ${PORT}`);
})


app.get('/', (req,res) => {

res.send("<h2>Declaration:</h2><p>I declare that this test is my own work in accordance with Seneca Acedemic Policy. No part of this test has been copied manually or electronically from any other source.</p><p>Name: <mark>Harnoor Kaur</mark></p><p>Student Number: <mark>156624215</mark></p><p><a href='/test1'>Go to Test1</a></p>");
});

app.use(express.static(path.join(__dirname,'pages')))


app.get("/test1",(req,res) => {

  res.sendfile(path.join(__dirname,"./pages/test1.html"))
  

})


//app.listen();