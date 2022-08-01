import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
            <div className="collapse navbar-collapse" >
                <ul className='navbar-nav me-auto mb-2 mb-lg-0 nav-bar ms-5'>
                    <li className='nav-item nav-li mb-2 me-3 fs-5'><Link className='nav-link active' to="/"> Home</Link></li>
                    <li className='nav-item nav-li me-3 fs-5'><Link className='nav-link active' to="/quotes"> Quotes</Link></li>
                    <li className='nav-item nav-li me-3 fs-5' ><Link className='nav-link active' to="/Characters"> Characters</Link></li>
                </ul>
                
            </div>
        </nav>

    )
}

export default Header