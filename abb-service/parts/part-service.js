const { PartsMockedApi } = require("./parts-mock-api");

class PartService {
    /**
     * 
     * @param {PartsMockedApi} partsApi 
     */
    constructor(partsApi) {
        this.partsApi = partsApi;
    }

    emit(socket) {
        const parts = this.partsApi.getParts();
        socket.emit('parts', parts);
    }

    startStreamingParts(socket) {
        this.emit(socket);
        const intervalId = setInterval(() => this.emit(socket), 5000);
        socket.on('disconnect', () => {
            console.log('User disconnected', socket.id);
            this.stopStreamingParts(intervalId);
        });
    }

    stopStreamingParts(interval) {
        clearInterval(interval);
    }
}

module.exports = {
    PartService,
}