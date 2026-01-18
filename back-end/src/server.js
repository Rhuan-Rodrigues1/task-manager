const { app } = require('./app');
const { config } = require('dotenv');

config;

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('App running on: http://localhost:' + PORT);
    
})