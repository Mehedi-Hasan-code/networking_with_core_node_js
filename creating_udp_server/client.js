import dgram from 'node:dgram'; // UDP = user datagram protocol
import { readFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';

const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
  const message = msg.toString();
  console.log(`${message} ${rinfo.address} : ${rinfo.port}`);

  socket.close();
});

async function readFileFn(filePath) {
  // const content = await readFile(filePath, 'utf-8');
  const readStream = createReadStream(filePath, {
    highWaterMark: 1 * 1024,
    encoding: 'utf-8',
  });

  readStream.on('data', (chunk) => {
    socket.send(chunk, 3000, '10.222.64.149', () => {
      // console.log('sent');
    });
  });
}


await readFileFn('resources\\large.txt');
// socket.bind(3000, () => {
//   console.log(socket.address());
// })
