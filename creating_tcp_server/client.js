import net from 'node:net';

const socket = net.createConnection({
  host: '127.0.0.1',
  port: 4000,
});

socket.on('connect', () => {
  console.log('Connected to server');
  process.stdin.on('data', (input) => {
    const message = input.toString().trim();
    socket.write('Client says: ' + message);
  });
});

socket.on('data', (chunk) => {
  console.log('Server says:', chunk.toString());
});

socket.on('error', (err) => {
  console.log(err);
});

socket.on('close', () => {
  console.log('Connection closed');
});
