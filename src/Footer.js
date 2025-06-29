import React from 'react'

const Footer = () => {
    const DateData = new Date().getFullYear();
  return (
    <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2>Company</h2>
                                <ul>
                                    <li>
                                        <a href="#">F1soft</a>
                                    </li>
                                    <li>
                                        <a href="#">Leapfrog</a>
                                    </li>
                                    <li>
                                        <a href="#">Webpal</a>
                                    </li>
                                    <li>
                                        <a href="#">SoftNEP</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Support</h2>
                                <ul>
                                    <li>
                                        <a href="#">Self-Service</a>
                                    </li>
                                    <li>
                                        <a href="#">Help Desk</a>
                                    </li>
                                    <li>
                                        <a href="#">Technical Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Expert Support</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Services</h2>
                                <ul>
                                    <li>
                                        <a href="#">SaaS</a>
                                    </li>
                                    <li>
                                        <a href="#">Email Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Monitoring</a>
                                    </li>
                                    <li>
                                        <a href="#">Network Security</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Follow Us</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="">
                                            <i className="fab fa-facebook-f fontawesome_style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.instagram.com/muktinath_rajbanshi/" target="_blank">
                                            <i className="fab fa-instagram fontawesome_style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.youtube.com/@muktinathrajbanshi219" target="_blank">
                                            <i className="fab fa-youtube fontawesome_style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://x.com/@muktinathrajba2" target="_blank ">
                                            <i className="fab fa-twitter fontawesome_style"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-5">
                            <p className="main-hero-para text-center w-100">Copyright @ {DateData} MuktiPay. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;
