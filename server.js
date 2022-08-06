const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.get('/health', (req, res) =>{
    res.json({message: 'Successful '})
})

app.get('/', (req, res) =>{
    res.json({
        message: 'How are you'
    })
})

const port = process.env.port || 4000;
app.listen(port, (req, res) =>{
    console.log('Server is listen on port', port);
})