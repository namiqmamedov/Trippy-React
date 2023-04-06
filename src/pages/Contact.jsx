import React from 'react'
import contactImg from '../assets/images/contactImg01.jpg'
import {Container,Row,Form,FormGroup,Input} from 'reactstrap'
import '../styles/contact.css'


const Contact = () => {
  return (
    <>
          <section className='common__section'>
          <h1>Contact</h1>
          <img src={contactImg} alt="service image" />
          </section>

          <section className='contact__section'>
            <div className="contact__index">
                <h1 className='text-center fw-bold'>Send a message to us!</h1>
                <Container>
                    <Row>
                        <Form>
                        <FormGroup>
                            <Input
                            id="Name"
                            name="name"
                            placeholder="Name"
                            type="text"
                            autoComplete="off" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                            id="Email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            autoComplete="off" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                            id="Subject"
                            name="subject"
                            placeholder="Subject"
                            type="text"
                            autoComplete="off" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <textarea
                            id="Message"
                            name="message"
                            placeholder="Message"
                            className='form-control'
                            />
                        </FormGroup>
                        </Form>
                    </Row>
                </Container>
            </div>
          </section>
    </>
  )
}

export default Contact