import dgram from 'dgram';
import { forzaParser } from './ForzaParser.mjs';

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.error(`Server Error: ${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    try {
        const parsed = forzaParser(msg);
        process.stdout.write(`${parsed.speed}\r`);
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
