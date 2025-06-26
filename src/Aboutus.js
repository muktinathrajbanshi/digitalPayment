import React, { useState } from 'react'
import howToUseApp from './API/howToUse';
const Aboutus = () => {

  const [aboutData, setAboutData] = useState(howToUseApp);

  return (
    <>
     <section className="common_section our_services">
      <div className="conatiner mb-5">
        <div className="row">
          <div className="col-12 col-lg-5 text-center our_service_leftside_img">
            <img src="./images/dmark.jpg" alt="aboutUsImg" />
          </div>
          {/* 1st section right side */}
          <div className="col-12 col-lg-7 our_services_list">
              <h3 className="mini_title">--Available @ GOOGLE AND IOS APP STORE ONLY</h3>
              <h1 className="main-heading">How to use the App?</h1>
                {
                  aboutData.map((curElem) => {
                    const {id, title, info} =curElem;
                    return (
                      <>
                        <div className="row our_services_info" key={id}>
                          <div className="col-1 our_services_number">{id}</div>
                          <div className="col-10 our_service_data">
                            <h2>{title}</h2>
                            <p className="main_hero_para">
                            {info}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })
                }
              
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
          </div>
        </div>
      </div>
     </section>
     {/* 2nd part of about section */}
     <section className="common_section our_services our_services_rightside">
      <div className="conatiner mb-5">
        <div className="row">
          {/* 1st section right side */}
          <div className="col-12 col-lg-7 our_services_rightside_content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini_title">--SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">World class support is <br /> available 24/7</h1>
                {
                  aboutData.map((curElem) => {
                    const {id, title, info} =curElem;
                    return (
                      <>
                        <div className="row our_services_info" key={id}>
                          <div className="col-1 our_services_number">{id}</div>
                          <div className="col-10 our_service_data">
                            <h2>{title}</h2>
                            <p className="main-hero-para">
                            {info}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })
                }
              
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
          </div>
          {/* images section */}
          <div className="col-12 col-lg-5 our_service_rightside_img">
            <img src="./images/callcenter.jpg" alt="aboutUsImg" />
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Aboutus;
