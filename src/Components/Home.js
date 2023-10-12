import React from "react";

const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="row h-100 align-items-center justify-content-center gx-0">
          <div className="col-md-6">
            <img src="./images/giphy.gif" alt="loading...." />
          </div>
          <div className="col-md-6">
            <div className="brand-container">
              <h1 data-aos="slide-left">
                <b>Abdul Majeed</b>
              </h1>
              <p data-aos="slide-right">
                FullStack <b>Developer</b> and YouTuber
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
