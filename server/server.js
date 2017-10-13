require('dotenv').config();

const express = require('express'),
    massive = require('massive'),
    bodyParser = require('body-parser'),
    session = require('express-session');
    port = 7000;

const main = require('./controllers/main');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
    app.listen(port, () => {
        console.log(`Running on port: ${port}`);
    })
})

    app.post('/api/auth/login', main.login);
    app.post('/api/auth/register', main.register);
    app.post('/api/favorites/:id', main.favorite);

    app.get('/api/properties', main.getAllHouses);
    app.get('/api/favoritesid', main.getFavoritesId);

    // app.get('/user', (req, res) => {
    //     console.log(req.session.user);
    //     res.send(req.session.user);
    // });

// app.listen(port, () => {
//     console.log(`Running on port: ${port}`);
// })