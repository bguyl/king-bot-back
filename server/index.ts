'use strict';

import { Server } from 'hapi';

const server = new Server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err: Error) => {
    console.log(err);
    process.exit(1);
});

init();
