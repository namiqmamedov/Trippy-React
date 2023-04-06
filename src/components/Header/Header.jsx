import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import '../../styles/header.css'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {RiContactsBook2Fill} from 'react-icons/ri'
import {NavLink, Link} from 'react-router-dom'

const nav_links = [
    {
        display: 'Home',
        path: '/home',
        icon: <AiFillHome/>
    }, {
        display: 'About',
        path: '/about',
        icon: <AiFillInfoCircle/>
    }, {
        display: 'Service',
        path: '/service',
        icon: <MdWork/>
    }, {
        display: 'Contact',
        path: '/contact',
        icon: <RiContactsBook2Fill/>
    }
]

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <div className="header-index">
                        <div className="header-logo">
                            <a href='#'>
                                <h1>Trippy</h1>
                            </a>
                        </div>
                        <div className="header-content">
                            <ul>
                                {nav_links.map((item, index) => (
                                    <li key={index}>
                                    <NavLink to={item.path}>
                                        {item.icon}
                                        {item.display}
                                    </NavLink>
                                    </li>
                                ))}
                                {
                                <li>
                                    <a href="#">
                                        Sign Up
                                    </a>
                                </li> 
                                }
                            </ul>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header