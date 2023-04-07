import React,{useState} from 'react'
import {Container, Row, Col} from 'reactstrap'
import '../../styles/header.css'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {RiContactsBook2Fill} from 'react-icons/ri'
import {NavLink, Link} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/IO'

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

    const [navbar, setNavbar] = useState(false)

    return (
        <header>
            <Container>
                <Row>
                    <div className="header-index">
                        <div className="header-logo">
                            <Link to='/'>
                                <h1>Trippy</h1>
                            </Link>
                        </div>
                        <div className="header-content">
                            <ul className={navbar ? "nav-links-active" : "nav-links"} onClick={() => setNavbar(false)}>
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
                            <div className='mobile-menu-icon' onClick={() => setNavbar(!navbar)}>
                                {navbar ? <IoMdClose /> : <RxHamburgerMenu/>}
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header