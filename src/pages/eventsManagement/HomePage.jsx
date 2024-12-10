import React from "react"
import NavBar from "../../components/eventsManagement/NavBar";

function EventsHomePage() {
  return (
    <div className="eventsHomePage">
      <NavBar />
      <div className="description">
        <p>Discover a world of opportunities to learn, grow, and connect. From tech innovations to creative arts, our curated events are designed to inspire and empower you. Whether you're a professional, a hobbyist, or just curious, there's something here for everyone. Join us to explore exciting workshops, insightful sessions, and hands-on experiences. Start your journey with us today!</p>
      </div>
      <div className="sliderImageDiv">
        <section className="slider_container">
          <section className="slider">
            <div className="slide one">
              <img src={require("../../images/EventManagement/publcSpeaking.jpg")} alt="" />
              <span className="caption">
                Public Speaking
              </span>
            </div>
            <div className="slide two">
              <img src={require("../../images/EventManagement/retroEvent.jpg")} alt="" />
              <span className="caption">
                Retro Event
              </span>
            </div>
            <div className="slide three">
              <img src={require("../../images/EventManagement/photography.jpg")} alt="" />
              <span className="caption">
                Photography
              </span>
            </div>
            <div className="slide four">
              <img src={require("../../images/EventManagement/fitness.jpg")} alt="" />
              <span className="caption">
                Fitness
              </span>
            </div>
            <div className="slide four">
              <img src={require("../../images/EventManagement/circus.jpg")} alt="" />
              <span className="caption">
                Circus
              </span>
            </div>
          </section>
        </section>
      </div>
      <div className="myFooter">
        <footer className="section footer-classNameic context-dark bg-image">
          <div className="container">
            <div className="row row-30">

              <hr />
              <br></br>
              <div className="col-md-4">
                <h5>Contacts</h5>
                <dl className="contact-list">
                  <dt>Address:</dt>
                  <dd>No:1311, Palavakkam Beach, Sholinganallur, Chennai, Tamil Nadu, India</dd>
                </dl>
              </div>
              <div className="col-md-4">
                <dl className="contact-list">
                  &nbsp;
                  <dt>email:</dt>
                  <dd><a href="mailto:#">aviiiiii1311@email.com</a></dd>
                </dl>
              </div>
              <div className="col-md-4">
                <dl className="contact-list">
                  &nbsp;
                  <dt>phones:</dt>
                  <dd><a href="tel:#">+91 9998887770</a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="row no-gutters social-container">
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>Instagram</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>Twitter</span></a></div>
            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>Youtube</span></a></div>
          </div>
          <p className="rights" style={{ margin: '0px' }}><span>©  </span><span className="copyright-year">2024</span><span> </span><span>Company</span><span> - </span><span>All Rights Reserved.</span></p>
        </footer>
      </div>
    </div>
  );
}

export default EventsHomePage;
