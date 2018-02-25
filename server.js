require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const properties_controller = require('./src/controllers/properties_controller')

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db =>{
  
    app.set('db', db);
});


app.use(cors() );

app.get('/api/properties', properties_controller.getAll)






const port = process.env.SERVER_PORT || 3005;
app.listen(port, () => { console.log('Started server on port ', port)});