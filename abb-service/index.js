const { PartService } = require('./parts/part-service');
const { PartsMockedApi } = require('./parts/parts-mock-api');
const { Server } = require('socket.io');
const http = require('http');


const port = process.env.PORT || 3001;
const server = http.createServer();
const io = new Server(server, {
    cors: '*',
});

const partsApi = new PartsMockedApi();
function streamParts(socket) {
    const partService = new PartService(partsApi);
    partService.startStreamingParts(socket);
}

io.on('connection', socket => {
    console.log('User connected', socket.id);
    streamParts(socket);
});

server.listen(process.env.PORT || 3001, 
    () => console.log(`abb service running on port ${port}`)
);