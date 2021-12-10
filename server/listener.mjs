import dgram from 'dgram';

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.error(`Server Error: ${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    process.exit(1);
    process.stdout.write(`${msg.toString('hex')}\t${rinfo.address}\t${rinfo.port}\r`)
});

server.on('listening', () => {
    const address = server.address();
    address.address = '127.0.0.1';
    console.log(`Server listening on ${address.address}:${address.port}`);
});

server.bind(5300);
