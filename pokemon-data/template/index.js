const express = require('express');
const app = express();
const axios = require('axios');

app.set('view engine', 'ejs');
const path = require('path');
app.set('views', path.join(__dirname, 'views'));


app.get('/pokemon/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const getPokeApi =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        console.log(getPokeApi);
        res.render('pokemon', {getPokeApi, id});
        
    } catch (err) {
        console.log(err);
        res.send('error!!');
    }

    // res.render('pokemon', {id});
});

app.listen('3000', () => {
    console.log('port3000');
});

