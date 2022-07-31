import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <ul>
                <li> <Link to="/"> Home</Link> </li>
                <li> <Link to="/quotes"> Quotes</Link> </li>
                <li> <Link to="/Characters"> Characters</Link> </li>
            </ul>

        </div>
    )
}

export default Header