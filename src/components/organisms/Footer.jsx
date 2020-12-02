import React from "react"

const Footer = () => (
    <div className="container-footer">        
        <div className="container-redes">
            <a href="https://www.google.com.pe/maps" target="_blank"><i className="iconRed fas fa-map-marker-alt"></i></a>
            <a href="https://www.facebook.com/" target="_blank"><i className="iconRed fab fa-facebook"></i></a>
            <a href="https://www.whatsapp.com/" target="_blank"><i className="iconRed fab fa-whatsapp"></i></a>
            <a href="https://mail.google.com/mail" target="_blank"><i className="iconRed far fa-envelope"></i></a>
        </div>
        <div className="container-copyright">
            <p className="copyright">Copyright © 2020. All rights reserved</p>
        </div>
    </div>
)

export default Footer;