
const express = require('express')
const app = express()
const port = 3001
const mysql = require('mysql');

mysql.createConnection({   
    host: "localhost",   
    user: "root",   
    password: "password",
    database: "test"    
});


app.get('/', (req, res) => {
  res.send('Hello World!')
    // if(db){
    //     res.send('dataBase connected')
    // }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})