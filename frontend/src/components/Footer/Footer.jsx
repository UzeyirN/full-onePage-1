import React from 'react'
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <>
      <div className='footer-wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 footer-item">
              <div className="footer-item__inner">
                <h5 style={{ color: "white" }}>ABOUT THE HEXA TEMPLATE</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
                <div className='footer-social'>
                  <a href='twitter.com'><i class="fa-brands fa-twitter footer-i"></i></a>
                  <a href='facebook.com'><i class="fa-brands fa-facebook footer-i"></i></a>
                  <a href='linkedin.com'><i class="fa-brands fa-linkedin-in footer-i"></i></a>
                  <a href='instagram.com'><i class="fa-brands fa-instagram footer-i"></i></a>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 footer-item">
              <h5 style={{ color: "white" }}>CONTACT INFO</h5>
              <h6 style={{ color: "gray" }}>Adress:</h6>
              <p style={{ color: "white" }}>34 Street Name, City Name Here, United States</p>

              <h6 style={{ color: "gray" }}>Telephone:</h6>
              <p style={{ color: "white" }}>+994552516420</p>

              <h6 style={{ color: "gray" }}>Email:</h6>
              <p style={{ color: "white" }}>uzeyir.nev@gmail.com</p>


            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 footer-item">
              <h5 style={{ color: "white" }}>QUICK LINKS</h5>
              <h6><a className='quick-a' href="/">About</a></h6>
              <h6><a className='quick-a' href="/">Terms of Use</a></h6>
              <h6><a className='quick-a' href="/">Disclaimers</a></h6>
              <h6><a className='quick-a' href="/">Contact</a></h6>
            </div>
          </div>

          <h5 style={{ color: "gray", margin: "100px 0 0 0", textAlign: "center" }}>Copyright © 2023 All rights reserved | This template is made with  by Colorlib</h5>
        </div>
      </div>
    </>
  )
}

export default Footer