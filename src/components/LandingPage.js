import React from 'react'
import '../style/pinchMain.css'
import '../style/landing.css'

function LandingPage() {
   let url="";
    return (
        <div>
            <div className="container-ex displayTitle titleText" >
            <br></br>
            <br></br>
            <div className="overlay-effect">
            <div className="disp-xl" style={{textAlign:"center"}}>Fataak</div>
            <p className="disp-sm" style={{textAlign:"center"}}>10 items, 7 days, best prices always!</p>
            <div className="glow-position">
                <ul className="ul-move tooltip">
                    <li className="tooltip-1"><a href={url}><i className="fa fa-home" aria-hidden="true"></i></a>
                    <span className="tooltiptext">Home</span>
                    </li>
                    <li className="tooltip-2"><a href={url}><i className="fa fa-user-circle" aria-hidden="true"></i></a>
                    <span className="tooltiptext">Account</span>
                    </li>
                    <li className="tooltip-3"><a href={url}><i className="fa fa-cart-plus" aria-hidden="true"></i></a>
                    <span className="tooltiptext">Order now</span>
                    </li>
                    <li className="tooltip-4"><a href={url}><i className="fa fa-star" aria-hidden="true"></i></a>
                    <span className="tooltiptext">Upcoming!</span>
                    </li>
                </ul>
            </div>
            <br></br>
           
            </div>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            </div>
            <div className="banner">
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
