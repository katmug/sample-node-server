import express from 'express';
import config from './config/config';

export const app = express();
async function startServer() {

    await require('./services').default({ expressApp: app });

    app.listen(config.port, () => {
        console.log('Server listening on port:', config.port);
    }).on('error', err => {
        console.log("ERROR: starting service", err);
        process.exit(1);
    });


}

startServer();

