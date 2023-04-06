import React from 'react'
import {Container,Col,Row,Card,CardBody,CardTitle,CardText} from 'reactstrap'
import {trips} from '../data/trips'
import aboutImg from '../assets/images/aboutImg01.jpg'
import '../styles/service.css'



const Service = () => {
  return (
    <>

    <section className='common__section'>
          <h1>Service</h1>
          <img src={aboutImg} alt="service image" />
    </section>


    <section> 
        <div id="trips-index" className="trips-index">
        <h1 className="title text-center">Recent Trips</h1>
        <p className='subtitle text-center'>You can discover unique destinations using Google Maps.</p>
        <Container>
            <Row>
            <div className="trip-card">
              {trips.map((trip,i) =>(
                <Card key={i}>
                <div className="card-thumbnail">
                <img
                    alt="Sample"
                    src={trip.image}
                />
                </div>
            <CardBody>
                <CardTitle tag="h4">
                {trip.title}
                </CardTitle>
                <CardText>
                {trip.text}
                </CardText>
            </CardBody>
                </Card>
              ))}
            </div>
            </Row>
        </Container>
        </div>
    </section>
    </>
  )
}

export default Service