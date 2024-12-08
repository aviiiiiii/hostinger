import React from "react"
import NavBar from "../../components/eventsManagement/NavBar";

function EventsHomePage() {
  return (
    <div className="eventsHomePage">
      <NavBar />
      <div className="description">
        <p>Event Management has been crafting extraordinary events across the country for the past 2 years. From electrifying DJ nights and serene camping trips to enlightening book fairs, vibrant parties, and captivating concerts, we do it all. With a passion for creativity and a knack for innovation, we bring unique ideas to life.</p>
      </div>
      <div className="sliderImageDiv">
        <section className="slider_container">
          <section className="slider">
            <div className="slide one">
              <img src={require("../../images/EventManagement/concert.jpg")} alt="" />
              <span className="caption">
                Concert
              </span>
            </div>
            <div className="slide two">
              <img src={require("../../images/EventManagement/camping.jpg")} alt="" />
              <span className="caption">
                Camping
              </span>
            </div>
            <div className="slide three">
              <img src={require("../../images/EventManagement/party.jpg")} alt="" />
              <span className="caption">
                Party
              </span>
            </div>
            {/* <div className="slide four">
        <img src="https://cdn.pixabay.com/photo/2023/01/06/13/33/city-7701251_960_720.jpg" alt=""/>
        <span className="caption">
          slide four
        </span>
      </div>
      <div className="slide four">
        <img src="https://cdn.pixabay.com/photo/2023/01/10/00/30/swan-7708580__340.jpg" alt=""/>
        <span className="caption">
          slide five
        </span>
      </div> */}
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
                  <dd>798 South Park Avenue, New York, USA</dd>
                </dl>
              </div>
              <div className="col-md-4">
                <dl className="contact-list">
                  &nbsp;
                  <dt>email:</dt>
                  <dd><a href="mailto:#">compagny@email.com</a></dd>
                </dl>
              </div>
              <div className="col-md-4">
                <dl className="contact-list">
                  &nbsp;
                  <dt>phones:</dt>
                  <dd><a href="tel:#">1.555.652.258</a> <span>or</span> <a href="tel:#">1.55.652.268</a>
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
                <p className="rights" style={{margin:'0px'}}><span>©  </span><span className="copyright-year">2024</span><span> </span><span>Company</span><span> - </span><span>All Rights Reserved.</span></p>
        </footer>
      </div>
    </div>
  );
}

export default EventsHomePage;
