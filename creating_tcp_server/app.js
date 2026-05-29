import net from 'node:net';

const server = net.createServer();


server.listen(4000, '0.0.0.0', () => {
  console.log('Server is listening on port 4000');
});

server.on('error', (err) => {
  console.error(err);
});

server.on('connection', (socket) => {
  console.log(
    'client connected successfully from: ' +
      socket.remoteAddress +
      ':' +
      socket.remotePort
  );

  console.log(
    'My address is: ' + socket.address().address + ':' + socket.address().port
  );

  socket.on('data', (data) => {
    console.log(data.toString());
    socket.write('Got your message');
  });

  socket.on('error', (err) => {
    if (err.code === 'ECONNRESET') {
      console.log('Client disconnected unexpectedly (ECONNRESET)');
      return;
    }
    console.error('Socket error:', err);
  });

  socket.on('end', () => {
    console.log('Client ended the connection');
  });

  socket.on('close', () => {
    console.log('disconnected');
  });
});
