const express = require('express');
const router = express.Router();
const MenuItem = require('./../model/MenuItem');


router.post('/', async (req, res) => {
  try{

    const data = req.body; // Assuming the request body contains the person data

    // Create a new Person document using the Mongoose model
    const newMenuItem = new MenuItem(data);

    // Save the new person to the database
    const response = await newMenuItem.save()
    console.log('Data saved successfully');
    res.status(200).json(response);
  }
  catch(err){
     console.log(err);
     res.status(500).json({ error: 'Internal server error' });   
}
})

router.get('/', async (req, res) => {
  try {
    // Fetch all persons from the database
    const data = await MenuItem.find();

    console.log('Data fetched successfully');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;

