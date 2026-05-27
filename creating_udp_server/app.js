import dgram from 'node:dgram'; // UDP = user datagram protocol
import { writeFile } from 'node:fs/promises'
import { createWriteStream } from 'node:fs'

const socket = dgram.createSocket('udp4')
const writeStream = createWriteStream('Nums.txt')

socket.on('message', async (msg, rinfo) => {
  const message = msg.toString();
  // await writeFile('Nums.txt', message)
  writeStream.write(message)
  // console.log(`received from ${rinfo.address}: ${rinfo.port}`)

  // socket.send('message received from server : ', rinfo.port, rinfo.address)
})


socket.bind(3000, () => {
  console.log(socket.address());
})