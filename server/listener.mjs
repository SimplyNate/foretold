import dgram from 'dgram';
import { forzaParser } from './ForzaParser.mjs';
import Fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import * as path from 'path';
import childProcess from 'child_process';
import ws from 'ws';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const wss = new ws.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
    const server = dgram.createSocket('udp4');

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


const fastify = Fastify({ logger: true });
fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
});


async function start() {
    try {
        await fastify.listen(3000);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();



const url = 'http://localhost:3000/';
childProcess.exec(`xdg-open ${url}`);
