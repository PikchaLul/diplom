const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

const config = require('./config/config.json');
const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
    useNewUrlParser: true,
    reconnectTries: 10,
    reconnectInterval: 3000
});

let dbConnection = mongoose.connection;

dbConnection.on('error', err => console.log(err));

dbConnection.on('close', () => {
    console.log('Database connection closed.');
})

dbConnection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(
    session({
        secret: "sdfsdfdsfcsf",
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
    })
);



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.use('/authentication', routes.api.authentication);
app.use('/main/groups', routes.api.groups);

const server = app.listen(config.serverPort, () => {
    console.log(`server is up running on port ${config.serverPort}`)
});
