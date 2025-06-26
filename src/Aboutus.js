import React from 'react'

const Aboutus = () => {
  return (
    <div>
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
              <div className="row our_services_info">
                <div className="col-1 our_services_number">1</div>
                <div className="col-10 our_service_data">
                  <h2>Sign in</h2>
                  <p className="main_hero_para">
                    Sign in to access your account, view personalized information, manage settings, and stay updated with the latest features, services, and notifications.
                  </p>
                </div>
              </div>
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
          </div>
        </div>
      </div>
     </section>
    </div>
  )
}

export default Aboutus;
