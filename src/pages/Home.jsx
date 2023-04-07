import React from 'react'
import heroImage from '../../src/assets/images/hero-image.jpg'
import destination01 from '../../src/assets/images/destination01.jpg'
import destination02 from '../../src/assets/images/destination02.jpg'
import {Container,Row,Card,CardBody,CardTitle,CardText} from 'reactstrap'
import {trips} from '../data/trips'
import '../../src/styles/home.css'



const Home = () => {
    return (
        <>
      <section>
        <div className="hero-section">
          <img src={heroImage} alt="hero image" />
          <div className="hero-text">
            <h1>Your Journey Your Story</h1>
            <h5>Choose Your Favourite Destination</h5>
            <div className="travel-btn">
              <a href="#" className="btn btn-main">
                Travel Plan
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="destination-index">
          <h1 className="title text-center">Popular Destinations</h1>
          <p className='subtitle text-center'>Tour give you the opportunity to see a lot, within a time frame.</p>
          <Container>
            <Row>
            <div className="destination-card d-flex">
                <div className="destination-content col-lg-6">
                    <h2>Taal Volcano, Batangas</h2>
                    <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</p>
                </div>
                <div className="destination-thumbnail col-lg-6">
                    <img src={destination01} alt="" />
                    <img src={destination02} alt="" />
                </div>
            </div>
            <div className="destination-card-reverse d-flex">
            <div className="destination-thumbnail col-lg-6">
                <img src={destination01} alt="destionation img" />
                <img src={destination02} alt="destination img" />
                </div>
                <div className="destination-content col-lg-6">
                    <h2>Mt. Daguldul, Batangas</h2>
                    <p>If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim.</p>
                </div>
            </div>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <div id="trips-index"  className="trips-index">
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

export default Home