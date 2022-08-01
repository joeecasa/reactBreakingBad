import React from 'react'
import FetchWithCustomHooksCharacters from "./FetchWithCustomCharacters";
import FetchWithCustomQuotes from "./FetchWithCustomQuotes";
import Home from './Home';
import {Routes,Route} from "react-router-dom"

const Main = () => {
    return (
        
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Characters" element={<FetchWithCustomHooksCharacters />} />
                <Route path="/quotes" element={<FetchWithCustomQuotes />} />

            </Routes>

        
    )
}

export default Main