import React, { createContext, useContext, useEffect, useState } from 'react';
import partsApi from '../../api/parts.api';

const HomeContext = createContext();

export function useHomeState() {
    return useContext(HomeContext);
}

function HomeProvider({ children }) {
    const [parts, setParts] = new useState([]);

    useEffect(() => {
        partsApi.connect().then(() => {
            partsApi.startReadingParts(setParts);
        });
    },[]);

    return (
        <HomeContext.Provider value={{ parts }}>
            {children}
        </HomeContext.Provider>
    );
}

export default HomeProvider;