const express = require('express');
const htmlRoute = require('./routes/htmlroute')
const apiRoute = require('./routes/apiroute')


const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Start the server on the port
app.use('/api', apiRoute)

app.use('/', htmlRoute)
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

