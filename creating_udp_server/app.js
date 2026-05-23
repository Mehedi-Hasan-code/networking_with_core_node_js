import dgram from 'node:dgram'; // UDP = user datagram protocol

const socket = dgram.createSocket('udp4')

socket.on('message', (msg, rinfo) => {
  const message = msg.toString();
  console.log(`received ${message} from ${rinfo.address}: ${rinfo.port}`)

  socket.send('message received', rinfo.port, rinfo.address)
})


socket.bind(3000, () => {
  console.log(socket.address());
})