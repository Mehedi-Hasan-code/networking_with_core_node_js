import dgram from 'node:dgram'; // UDP = user datagram protocol

const socket = dgram.createSocket('udp4')


socket.send('hello from client.js', 3000, '10.222.64.149')

socket.on('message', (msg, rinfo) => {
  const message = msg.toString();
  console.log(`${message} from server ${rinfo.address} : ${rinfo.port}`)

  socket.close()
})

// socket.bind(3000, () => {
//   console.log(socket.address());
// })