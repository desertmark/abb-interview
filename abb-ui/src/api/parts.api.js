import socketIOClient from "socket.io-client";
import {appConfig} from '../config/app.config';

class PartsApi {
    constructor() {
        this.socket = null;
    }

    connect() {
        return new Promise((res) => {
            this.socket = socketIOClient(appConfig.baseUrl);
            this.socket.on('connect', res);
        });
    }

    startReadingParts(cb) {
        this.socket.on('parts', cb);
    }
}

export default new PartsApi();