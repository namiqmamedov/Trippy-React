import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'
import ScrollToTop from '../ScrollToTop'


const Layout = () => {
    return (
        <div>
            <Header/>
            <ScrollToTop/>
            <div>
                <Routes/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout