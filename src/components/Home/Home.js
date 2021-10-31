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
                      className="btn-success px-3 py-2"
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
    </div>
  );
};

export default Home;
