const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');
const flightRoute =[
    {
      title: "flight to canada",
      time: "1pm",
      price: 26000,
      date: "26-06-2022"
      }  
  ]

router.get('/', controller.flightRoute, (req, res)=>{
    console.log(flightRoute);
    res.send()
});
router.post('/',  (req, res)=>{
    const flight = reg.body;
    flightRoute.push(flight);

    res.send(`flight with the name ${flight.name}added to the database!`);
});

router.get('/;id', (req, res)=>{
    const {id} = reg.params;
   const foundFlight = flighRoute.find((flight)=>flight.id == id);

    res.send(foundFlight);
});

router.delete('/;id', (req, res)=>{
    const {id} = reg.params;
    flightRoute =flighRoute.filter((flight)=>flight.id == id);

    res.send(`flight with the id ${id}added to the database!`);
});

router.patch('/;id', (req, res)=>{
    const {id} = reg.params;
    const {title, time, price, date} =reg.body;
    const flightToBeUpdated = flightRoute.find((flight) => flight.id == id);
    if(title) flightTitle = title;
    if(time) flightTitle = time;
    if(price) flightTitle = price;
    if(date) flightTitle = date;



    res.send(`flight with the id ${id} has been updated!`);
});



module.exports = router;

