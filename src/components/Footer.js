import React from 'react'

function Footer() {
    return (
        <div>
            <footer classname="footer__dark" style={{padding:"1.3%"}}>
                <div classname="footer__container">

                </div>
                <div classname="footer__container">
                    <div classname="footer__items">
                        <div classname="footer__item footer__item-about">
                            <h2 classname="footer__item-title"><span classname="footer__item-subtitle disp-lg">Fataak</span></h2>
                            <br></br>
                            <p classname="footer__item-text disp-sm">
                                Be unique always! 
                            </p>
                            <p>With Fataak, shop like you have never shopped before! Get a chance to buy unique, hand picked items every week, no one knows what will come next, but, we assure you, it will set you apart from the crowd. Ekdam "Fataak" se!</p>
                            <ul classname="footer__list">
                                <li><a classname="footer_list-link" href="tel:123-456-789"><i classname="fa fa-phone"></i>
                                        123-456-789</a></li>
                                <li><a classname="footer_list-link" href="mailto:ankushors789@gmail.com"><i
                                            classname="fa fa-envelope"></i> ankushors789@gmail.com</a></li>
                                
                            </ul>
                        </div>

                        <div classname="footer__item footer__item-links">
                        <br></br>
                        <br></br>
                            <h2 classname="footer__item-title">Quick Links</h2>
                            <br></br>
                            <ul classname="footer__item-list">
                                <li><a classname="footer__item-link" href="#">Home</a></li>
                                <li><a classname="footer__item-link" href="#">Order</a></li>
                                <li><a classname="footer__item-link" href="#">Your Account</a></li>
                                <li><a classname="footer__item-link" href="#">Upcoming</a></li>
                                <li><a classname="footer__item-link" href="#">Contact us</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div classname="footer__container footer__copy">
                    <p>powered by <a href="https://github.com/ScorchingShade/Pinch">ScorchingShade</a></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
