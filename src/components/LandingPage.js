import React from 'react'
import '../style/pinchMain.css'
import '../style/landing.css'

function LandingPage() {
    return (
        <div>
            <div className="container-ex displayTitle titleText" >
            <br></br>
            <br></br>
            <div className="row ">
                <div className="col-5"></div>
                <div className="col-5 disp-xl" style={{textAlign:"center"}}>LeoCode</div>
                <div className="col-5"></div>

            </div>
            <p className="disp-sm" style={{textAlign:"center"}}>Your own code dumpster</p>
            <br></br>
            <br></br>
            </div>
        </div>
    )
}

export default LandingPage
