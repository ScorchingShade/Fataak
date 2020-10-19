import React from 'react'
import '../style/pinchMain.css'
import '../style/landing.css'
import Background from '../resources/techbg.jpg'

function LandingPage() {
    return (
        <div>
            <div className="container-ex displayTitle titleText" style={{backgroundImage: `url(${Background})`, width:'100%', height:'100%'}}>
            <br></br>
            <br></br>
            <div className="disp-xl" style={{textAlign:"center"}}>Fataak</div>
            <p className="disp-sm" style={{textAlign:"center"}}>10 items, 7 days, best prices always!</p>
            <image src="./resources/techbg.jpg"></image>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            </div>
            <div className="banner container-ex">
            <br></br>
            <br></br>
                <p className="disp-sm caption-text">Welcome to Fataak, a store where you can buy 10 unique items every week!</p>
                <p className="disp-xs shake caption-sub-text">No need to spend hours scrolling! Just tap, add and pay! Its that easy!</p>
            <br></br>
            <br></br>    
            </div>
        </div>
    )
}

export default LandingPage
