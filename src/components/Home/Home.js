import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios
      .get("https://bloodcurdling-corpse-06487.herokuapp.com/spots")
      .then((res) => setSpots(res.data));
  }, []);
  return (
    <div>
      <Banner></Banner>

      <div className="container">
        {spots.length > 0 ? (
          <div className="row p-3">
            {spots.map((spot) => (
              <div className="col-md-4  p-2">
                <div className="card">
                  <img src={spot.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{spot.planName}</h5>
                    <p className="card-text">
                      {spot.description.slice(0, 140)}...
                    </p>
                    <NavLink
                      className="btn-success bg-blue px-3 py-2"
                      to={`/spot/${spot._id}`}
                    >
                      Book Now
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row my-5">
            <div className="col d-flex align-items-center justify-content-center">
              <div class="spinner-border text-primary " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div id="award" className="bg-blue">
        <div className="">
          <div className="py-3">
            <h2 className="text-white fw-bold text-center">
              Award Winning and Top Rated Tour Operator
            </h2>
            <p className="text-white text-center">call our agents for book.</p>
          </div>
        </div>
        <div className="">
          <div className="row p-4">
            <div className="col-3 px-2 text-center  p-4">
              <div className="bg-white py-5">
                <i className="fas fa-user-nurse"></i>
                <p className="">8000+ Our Local Guides</p>
              </div>
            </div>
            <div className="col-3 px-2 text-center  p-4">
              <div className="bg-white py-5">
                <i className="fas fa-user-shield"></i>
                <p className="">100% Trusted Tour Agency</p>
              </div>
            </div>
            <div className="col-3 px-2 text-center p-4">
              <div className="bg-white py-5">
                <i className="fas fa-user-clock"></i>
                <p className="">28+ Years of Trave Experience</p>
              </div>
            </div>
            <div className="col-3 px-2 text-center p-4">
              <div className="bg-white py-5">
                <i className="far fa-laugh-beam"></i>
                <p className="">98% Our Travelers are Happy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="review" className="row">
        <div className="col-6">
          <img
            className=""
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hiking-quotes-1586278882.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
            alt=""
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Our Top Review</h3>
          <p className="">
            {" "}
            I have been using this tool since 2015 and have already plnned four
            trips with triphobo. I love your website. Really helpful tool for
            travel planning. I especially enjoyed that we could add multiple
            destinations as well as activities in the days.. Thumbs up!!!
          </p>
          <p className="mb-5">- Andria</p>
          <div>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
