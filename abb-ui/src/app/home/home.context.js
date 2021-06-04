import React, { createContext, useContext, useEffect, useState } from 'react';
import partsApi from '../../api/parts.api';
import socketIOClient from "socket.io-client";
import {appConfig} from '../../config/app.config';

const HomeContext = createContext();

export function useHomeState() {
    return useContext(HomeContext);
}

function HomeProvider({ children }) {
    const [parts, setParts] = new useState([]);
    const [socket, setSocket] = new useState();
    
    // useEffect(() => {
    //     const socket = socketIOClient(appConfig.baseUrl);
    //     setSocket(socket);
    //     socket.on('connect', () => {
    //         setUserId(socket.id)
    //         readPartsStream(socket);
    //     });
    // }, []);

    useEffect(() => {
        partsApi.connect().then(() => {
            partsApi.startReadingParts(setParts);
        });
    },[]);

    function readPartsStream(socket) {
        socket.on('parts', p => {
            console.log(p);
            setParts([...p]);
        });
    }

    return (
        <HomeContext.Provider value={{ parts }}>
            {children}
        </HomeContext.Provider>
    );
}

export default HomeProvider;