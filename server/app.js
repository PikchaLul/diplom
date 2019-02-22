import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'

import config from './config/config.json';
import routes from './routes'

const app = express();

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, 
                { useNewUrlParser: true , reconnectTries: 10,
                reconnectInterval: 3000 
                });

let dbConnection = mongoose.connection;

dbConnection.on('error', err => console.log(err));

dbConnection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.use('/groups', routes.api.groups)

const server = app.listen(config.serverPort, () => {
    console.log(`server is up running on port ${config.serverPort}`)
});
