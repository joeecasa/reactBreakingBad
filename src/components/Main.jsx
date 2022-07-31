import React from 'react'
import FetchWithCustomHooksCharacters from "./FetchWithCustomCharacters";
import FetchWithCustomHooks from "./FetchWithCustomHooks";
import Home from './Home';
import {Routes,Route} from "react-router-dom"

const Main = () => {
    return (
        
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Characters" element={<FetchWithCustomHooksCharacters />} />
                <Route path="/quotes" element={<FetchWithCustomHooks />} />

            </Routes>

        
    )
}

export default Main