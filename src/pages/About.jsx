import React from 'react'
import {Container,Row} from 'reactstrap'
import aboutImg from '../assets/images/aboutImg01.jpg'
import '../styles/about.css'

const About = () => {
  return (
    <>

    <section className='common__section'>
            <h1>About</h1>
          <img src={aboutImg} alt="about image" />
    </section>

    <section className='about__content'>
     <Container>
      <Row>
        <div className="about__main">
        <h1>Our History</h1>
        <p>Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence.</p>
        <h1>Our History</h1>
        <p>Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness.</p>
        <h1>Our Vision</h1>
        <p>To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.</p>
        </div>
      </Row>
     </Container>
    </section>

    </>


  )
}

export default About