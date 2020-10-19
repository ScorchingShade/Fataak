import React from 'react'
import '../style/pinchMain.css'

function navbar() {
    let url="";
    return (
        <>
        <div className="container-ex nav-dracula">
        <div>
            <input type="checkbox" id="check" value="checked"/>
            <img className="logo_responsive" src="https://new.tamuc.edu/wp-content/uploads/2019/08/Lion-Head-Clear-Space.png" alt="logo"/>
            <label className="checkbtn" for="check">
            <i className="fa fa-bars" style={{color:"white"}} ></i>
            </label>
            <header className="responsive-head">
                <nav>
                    <ul className="nav-responsive">
                        <li className="bolder-text"><a href={url}>Home</a></li>
                        <li className="bolder-text"><a href={url}>Order</a></li>
                        <li className="bolder-text"><a href={url}>Your Account</a></li>
                        <li className="bolder-text"><a href={url}>Upcoming</a></li>
                        <li className="bolder-text"><a className="cta-responsive" href={url}><button className="btn-nav-responsive">Contact</button></a></li>
                    </ul>
                </nav>
            </header>
        </div>
        <header>
            <img className="logo" src="https://new.tamuc.edu/wp-content/uploads/2019/08/Lion-Head-Clear-Space.png" alt="logo"/>
            <nav>
                <ul className="nav_link">
                        <li className="bolder-text"><a href={url}>Home</a></li>
                        <li className="bolder-text"><a href={url}>Order</a></li>
                        <li className="bolder-text"><a href={url}>Your Account</a></li>
                        <li className="bolder-text"><a href={url}>Upcoming</a></li>
                </ul>
            </nav>
            <a className="cta" href={url}><button className="btn-nav">Contact</button></a>
        </header>
    </div>
    </>
    )
}

export default navbar
