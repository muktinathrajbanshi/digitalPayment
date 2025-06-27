import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="contactus_section">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="contact_leftside col-12 col-lg-5">
                            <h1 className="main-heading fw-bold">Connect With Our <br /> Sales Team.</h1>
                            <p className="main-hero-para">In this section multiple clients will be visited for there requirements and needs on the basis of our company.</p>
                            <figure>
                                <img src="./images/contact.jpg" alt="contactUsImg" className="img-fluid" />
                            </figure>
                        </div>
                        {/* right side contact form */}
                        <div className="contact_rightside col-12 col-lg-7">
                            <form method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact_input_field">
                                            <input 
                                            type="text" 
                                            name=""
                                             id="" 
                                             className="form-control"
                                            placeholder="First Name" 
                                            />
                                        </div>
                                         <div className="col-12 col-lg-6 contact_input_field">
                                            <input 
                                            type="text" 
                                            name=""
                                             id="" 
                                             className="form-control"
                                            placeholder="Last Name" 
                                            />
                                        </div>
                                    </div>
                                     <div className="row">
                                        <div className="col-12 col-lg-6 contact_input_field">
                                            <input 
                                            type="text" 
                                            name=""
                                             id="" 
                                             className="form-control"
                                            placeholder="Phone Number" 
                                            />
                                        </div>
                                         <div className="col-12 col-lg-6 contact_input_field">
                                            <input 
                                            type="text" 
                                            name=""
                                             id="" 
                                             className="form-control"
                                            placeholder="Email ID" 
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 contact_input_field">
                                            <input 
                                            type="text" 
                                            name="" 
                                            id="" 
                                            className="form-control"
                                            placeholder="Add Address" 
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input 
                                            type="text" 
                                            name="" 
                                            id="" 
                                            className="form-control"
                                            placeholder="Enter Your Message"    
                                            />
                                        </div>
                                    </div>
                                    <div class="form-check form-checkbox-style">
                                        <input 
                                        class="form-check-input" 
                                        type="checkbox" 
                                        value="" 
                                        id="flexCheckChecked" 
                                        />
                                        <label
                                         class="form-check-label"
                                         className="main-hero-para">
                                            I agree that the muktinathpay may contact me at the
                                            email address or phone number above
                                        </label>
                                    </div>
                                <button type="submit" className="btn btn-style w-100">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
