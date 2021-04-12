// יצירת שרת

const dotenv = require("dotenv");
dotenv.config();

//general import 
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');  // import from express
const app = express();              // create app 

//import the connection 
const dbConnection = require('./DB');

//import the router module
const usersRouter = require('./routes/users-router');

// configuration of the port based on the env
const apiPort = process.env.PORT || 4000;      // import port from env 

//use of body-parser in order to reach teq.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//use of cors so our server will be able to get requests
app.use(cors());

const path = require('path');

dbConnection.on('error', () => { console.log('dbConnection error'); })

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Hello World' }); // מדפיס הודעה למשתמש בפרונט דרך מטודת ולכן צריך בצורה ג'ייסון http 
// })

// GET POST DELETE PUT 
app.listen(apiPort, () => {
    console.log(`server is up on port: ${apiPort}`);
})

app.use('/users', usersRouter);


