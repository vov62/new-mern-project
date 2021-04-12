const mongoose = require('mongoose')
const dbConnectionString = process.env.DB
//creating connection to users db
mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true },
)
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
// exporting the connection
module.exports = db