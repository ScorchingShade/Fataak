import React from 'react'

function Footer() {
    let url="";
    return (
        <div>
            <footer className="footer__dark" style={{padding:"1.3%"}}>
                <div className="footer__container">

                </div>
                <div className="footer__container">
                    <div className="footer__items">
                        <div className="footer__item footer__item-about">
                            <h2 className="footer__item-title"><span className="footer__item-subtitle disp-lg">Fataak</span></h2>
                            <br></br>
                            <p className="footer__item-text disp-sm">
                                Be unique always! 
                            </p>
                            <p>With Fataak, shop like you have never shopped before! Get a chance to buy unique, hand picked items every week, no one knows what will come next, but, we assure you, it will set you apart from the crowd. Ekdam "Fataak" se!</p>
                            <ul className="footer__list">
                                <li><a className="footer_list-link" href="tel:123-456-789"><i className="fa fa-phone"></i>
                                        123-456-789</a></li>
                                <li><a className="footer_list-link" href="mailto:ankushors789@gmail.com"><i
                                            className="fa fa-envelope"></i> ankushors789@gmail.com</a></li>
                                
                            </ul>
                        </div>

                        <div className="footer__item footer__item-links">
                        <br></br>
                        <br></br>
                            <h2 className="footer__item-title">Quick Links</h2>
                            <br></br>
                            <ul className="footer__item-list">
                                <li><a className="footer__item-link" href={url}>Home</a></li>
                                <li><a className="footer__item-link" href={url}>Order</a></li>
                                <li><a className="footer__item-link" href={url}>Your Account</a></li>
                                <li><a className="footer__item-link" href={url}>Upcoming</a></li>
                                <li><a className="footer__item-link" href={url}>Contact us</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="footer__container footer__copy">
                    <p>powered by <a href="https://github.com/ScorchingShade/Pinch">ScorchingShade</a></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
