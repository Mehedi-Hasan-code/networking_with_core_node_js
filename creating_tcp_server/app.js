import net from 'node:net';

const server = net.createServer();

server.listen(4000, '0.0.0.0', () => {
  console.log('Server is listening on port 3000');
});

server.on('err', () => {
  console.log(err);
});

server.on('connection', (socket) => {
  console.log('client connected successfully');
  console.log(socket.address());
  socket.on('data', (data) => {
    console.log(data.toString());
  });

  socket.on('end', () => {
    console.log('disconnected');
  });
});
