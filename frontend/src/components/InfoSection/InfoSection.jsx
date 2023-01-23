import React from 'react'
import '../InfoSection/InfoSection.css'

const InfoSection = () => {
    return (
        <>
            <div className='infoSec-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-4 ">
                            <div className='info-card'>
                                <i class="fa-solid fa-bell infosec-i"></i>
                                <h3>Modern Design</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='info-card'>
                                <i class="fa-regular fa-heart infosec-i"></i>
                                <h3>Build With Love</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className='info-card'>
                                <i class="fa-solid fa-bolt infosec-i"></i>
                                <h3>Fast Loading</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoSection