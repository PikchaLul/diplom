import express from 'express';
import bodyParser from 'body-parser';

import {serverPort} from './etc/config.json';

import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.get('/', async (req, res) => {
    // const data = await db.listNotes();
    // res.send(data);
})

// app.post('/notes', async (req, res) => {
//     const data = await db.createNote(req.body);
//     res.send(data);
// })

// app.delete('/notes/:id', async (req, res) => {
//     const data = await db.deleteNote(req.params.id);
//     res.send(data);
// })

const server = app.listen(serverPort, () => {
    console.log(`server is up running on port ${serverPort}`)
});
