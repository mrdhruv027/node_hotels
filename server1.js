const express = require('express')
const app = express()
const db = require('./db');
// const Person = require('./model/Person');
// const MenuItem = require('./model/MenuItem');


const bodyParser = require('body-parser');
const { AuthMechanism } = require('mongodb');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Welcome to my Hotel....')
})

const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/MenuItemRoutes');

app.use('/person', personRoutes);
app.use('/Menu', MenuItemRoutes);


app.listen(3000, () => {
    console.log('Listening on Port 3000');
    
})