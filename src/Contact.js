import React, { useState } from 'react'

const Contact = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;    
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({...userData, [name]:value});

    };

    //connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message} =userData;

        if(firstName && lastName && phone && email && address && message) {

        
        const res = fetch("https://reactwebsite-41216-default-rtdb.firebaseio.com/userDataRecords.json",
            {
                method: "POST",
                Headers: {
                   "Content-Type" : "application/json", 
                }, 
                body:JSON.stringify({
                    firstName, 
                    lastName, 
                    phone, 
                    email, 
                    address, 
                    message,
                }), 
            }
        );
        
        if (res) {
            setUserData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                address: "",
                message: "",
            });
            alert("Data Stored")
        } else {
            alert("Plz fill the Data")
        }
       }else {
            alert("Plz fill the Data")
        }
    };

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
                                            name="firstName"
                                             id="" 
                                             className="form-control"
                                            placeholder="First Name"
                                            value={userData.firstName}
                                            onChange={postUserData} 
                                            />
                                        </div>
                                         <div className="col-12 col-lg-6 contact_input_field">
                                            <input 
                                            type="text" 
                                            name="lastName"
                                             id="" 
                                             className="form-control"
                                            placeholder="Last Name" 
                                            value={userData.lastName}
                                            onChange={postUserData}
                                            />
                                        </div>
                                    </div>
                                     <div className="row">
                                        <div className="col-12 col-lg-6 contact_input_field">
                                            <input 
                                            type="text" 
                                            name="phone"
                                             id="" 
                                             className="form-control"
                                            placeholder="Phone Number"
                                            value={userData.phone}
                                            onChange={postUserData} 
                                            />
                                        </div>
                                         <div className="col-12 col-lg-6 contact_input_field">
                                            <input 
                                            type="text" 
                                            name="email"
                                             id="" 
                                             className="form-control"
                                            placeholder="Email ID" 
                                            value={userData.email}
                                            onChange={postUserData}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 contact_input_field">
                                            <input 
                                            type="text" 
                                            name="address" 
                                            id="" 
                                            className="form-control"
                                            placeholder="Add Address"
                                            value={userData.address}
                                            onChange={postUserData}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input 
                                            type="text" 
                                            name="message" 
                                            id="" 
                                            className="form-control"
                                            placeholder="Enter Your Message"
                                            value={userData.message}
                                            onChange={postUserData}
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
                                <button type="submit" className="btn btn-style w-100"
                                onClick={submitData}>
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
