import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import "./Flight.css";
import { useForm } from "react-hook-form";

const Flight = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/flight", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Sent Successfully");
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div id="booking" class="section">
        <div class="section-center">
          <div class="container">
            <div class="row">
              <div class="booking-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-group">
                    <div class="form-checkbox">
                      <select id="way" name="way" {...register("select way")}>
                        <option value="">Select Way</option>
                        <option value="one way">One Way</option>
                        <option value="two way">Two Way</option>
                        <option value="multi way">Multi Way</option>
                      </select>
                      {/* <label for="roundtrip">
                        <input
                          type="radio"
                          id="roundtrip"
                          name="flight-type"
                          {...register("round-trip")}
                        />
                        <span></span>Roundtrip
                      </label>
                      <label for="one-way">
                        <input
                          type="radio"
                          id="one-way"
                          name="flight-type"
                          {...register("one-way")}
                        />
                        <span></span>One way
                      </label>
                      <label for="multi-city">
                        <input
                          type="radio"
                          id="multi-city"
                          name="flight-type"
                          {...register("multi-city")}
                        />
                        <span></span>Multi-City
                      </label> */}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <span class="form-label">Flying from</span>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="City or airport"
                          {...register("from")}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <span class="form-label">Flyning to</span>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="City or airport"
                          {...register("to")}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">Departing</span>
                        <input
                          class="form-control"
                          type="date"
                          required
                          {...register("from date")}
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">Returning</span>
                        <input
                          class="form-control"
                          type="date"
                          required
                          {...register("to date")}
                        />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="form-group">
                        <span class="form-label">Adults (18+)</span>
                        <select class="form-control" {...register("adults")}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <span class="select-arrow"></span>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="form-group">
                        <span class="form-label">Children (0-17)</span>
                        <select class="form-control" {...register("children")}>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <span class="select-arrow"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">Travel class</span>
                        <select class="form-control">
                          <option value="economy class">Economy class</option>
                          <option value="business class">Business class</option>
                          <option value="first class">First class</option>
                        </select>
                        <span class="select-arrow"></span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-btn">
                        <button class="submit-btn">Book Flights</button>
                        <button className="rst mt-3" onClick={() => reset()}>
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Flight;
