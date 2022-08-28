import dgram from 'dgram';
import { forzaParser } from './ForzaParser.mjs';
import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import * as path from 'path';
import open from 'open';
import { WebSocketServer } from 'ws';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const wss = new WebSocketServer({ port: 3001 });
console.log('Opened websocket server on port 3001');

wss.on('connection', function connection(ws) {
    const server = dgram.createSocket('udp4');
    console.log('Created dgram UDP listen server');

    server.on('error', (err) => {
        console.error(`Server Error: ${err.stack}`);
        server.close();
    });

    server.on('message', (msg, rinfo) => {
        try {
            const parsed = forzaParser(msg);
            ws.send(JSON.stringify(parsed));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });

    server.on('listening', () => {
        const address = server.address();
        address.address = '127.0.0.1';
        console.log(`Server listening on ${address.address}:${address.port}`);
    });

    server.bind(5300);
});


const fastify = Fastify({ logger: false });
fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
});

fastify.listen({port: 3000}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
