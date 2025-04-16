import * as net from 'net';

const server = net.createServer((socket) => {
    socket.on('data', data => {
        console.log(data.toString());
    });
});

server.listen('./server.sock')
