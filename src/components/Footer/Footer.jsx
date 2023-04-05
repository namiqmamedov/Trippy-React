import React from 'react'
import {Container,Row} from 'reactstrap'
import '../../styles/footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
            <Container>
                <Row>
                   <div className="footer-index">
                      <div className="footer-top">
                        <div className="footer-text">
                        <h1>Trippy</h1>
                        <div className='footer-title'>Choose your favourite destination.</div>
                        </div>
                        <div className="footer-icon">
                          <AiOutlineFacebook/>
                          <AiOutlineInstagram/>
                          <AiOutlineTwitter/>
                        </div>
                      </div>
                      <div className="footer-content">
                        <div className="router-link">
                          <h4>Project</h4>
                          <a href="#">Changelog</a>
                          <a href="#">Status</a>
                          <a href="#">License</a>
                          <a href="#">All Versions</a>
                        </div>
                        <div className="router-link">
                          <h4>Community</h4>
                          <a href="#">Changelog</a>
                          <a href="#">Status</a>
                          <a href="#">License</a>
                          <a href="#">All Versions</a>
                        </div>
                        <div className="router-link">
                          <h4>Help</h4>
                          <a href="#">Changelog</a>
                          <a href="#">Status</a>
                          <a href="#">License</a>
                          <a href="#">All Versions</a>
                        </div>
                        <div className="router-link">
                          <h4>Others</h4>
                          <a href="#">Terms of Service</a>
                          <a href="#">Privacy Policy</a>
                          <a href="#">License</a>
                        </div>
                      </div>
                   </div>
                </Row>
            </Container>
        </footer>
  )
}

export default Footer