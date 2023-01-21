import React from 'react'
import '../Collaboration/Collaboration.css'

const Collaboration = () => {
    return (
        <>
            <div className='collaboration-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp" alt="" />
                        </div>
                        <div className="col-6">
                            <div className="colla-card">
                                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <h4>02</h4>
                                    <span style={{ border: "2px solid red", width: "40px", height: 0 }}></span>
                                    <h4>COLLABORATE</h4>
                                </div>
                                <h2 style={{ fontSize: "3em", marginBottom: "50px" }}>Let's Build Together</h2>
                                <p style={{ fontSize: "1.5em" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Collaboration