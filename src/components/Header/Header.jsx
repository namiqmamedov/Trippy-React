import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import '../../styles/header.css'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {RiContactsBook2Fill} from 'react-icons/ri'


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
                                <li>
                                    <a href="#">
                                        <AiFillHome/>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    
                                    <a href="#">
                                    <AiFillInfoCircle/>

                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <MdWork/>
                                        Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <RiContactsBook2Fill/>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Sign Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header