import React from 'react'
import '../InfraStructor/InfraStructure.css'

const InfraStructure = () => {
    return (
        <>
            <div className='infrastructure-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="infra-card">
                                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <h4>01</h4>
                                    <span style={{ border: "2px solid red", width: "40px", height: 0 }}></span>
                                    <h4>INFRASTRUCTURE</h4>
                                </div>
                                <h2 style={{fontSize:"3em",marginBottom:"50px"}}>Let's Build Together</h2>
                                <p className='infra-p' style={{fontSize:"1.5em"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfraStructure