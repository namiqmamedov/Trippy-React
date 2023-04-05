import React from 'react'
import {Container,Row,Col} from 'reactstrap'

const Header = () => {
  return (
    <header>
        <div className="header-index">
            <div className="header-logo">
                <a href='#'>
                    <h1>Trippy</h1>
                </a>
            </div>
            <div className="header-content">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Index</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header