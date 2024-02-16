const express = require('express');
const PORT = 3000 || env.PORT;
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

const TRANSPORT_CO2_PER_KM = 0.123
const ELECTRICITY_CO2_PER_KWH =0.87
const GAS_CO2_PER_KWH = 0.3
const WASTE_CO2_PER_KG = 0.4

var al_sub = 0;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecotrac',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

app.post('/login', (req, res) => {
    const {email,password} = req.body;
    // Use the connection pool to execute a query
    pool.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (error, results) => {
      if (error) {
        console.error(error);
        res.redirect('error503');
        // return;
      }
  
      if (results.length > 0) {
        username = email.replace("@gmail.com", "");
        res.render('dashboard',{username, al_sub});
      } else {
        res.status(401).send('Invalid credentials');
      }
    });
  });

app.post('/footprint',(req,res)=>{
    const {
        travelDistance,
        electricityConsumption,
        wasteProduced,
        naturalGasUsage
    } = req.body;

    transport_co2 = TRANSPORT_CO2_PER_KM * travelDistance
    electricity_co2 = ELECTRICITY_CO2_PER_KWH * electricityConsumption
    gas_co2 = GAS_CO2_PER_KWH * naturalGasUsage
    waste_co2 = WASTE_CO2_PER_KG * wasteProduced
    al_sub = 1

    console.log({transport:transport_co2,electricity:electricity_co2,gas:gas_co2,waste:waste_co2});
    res.render('results',{transport:transport_co2,electricity:electricity_co2,gas:gas_co2,waste:waste_co2})
})


app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/feature',(req,res)=>{
    res.render('feature');
});
app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
});
app.get('/team',(req,res)=>{
    res.render('team')
})

app.listen(PORT, ()=>{
    console.log( `Server is running on port ${PORT}`);
});