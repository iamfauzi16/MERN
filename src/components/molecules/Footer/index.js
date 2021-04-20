import React from 'react'
import { ICfacebook, ICinstagram, Logo, ICwhatsapp, ICtwitter } from '../../../assets'

import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img src={Logo} alt="img" className="logo"/>
                </div>
               
                <div className="social-wrapper">
                    <Icon img={ICfacebook} />
                    <Icon img={ICinstagram} />
                    <Icon img={ICtwitter} />
                    <Icon img={ICwhatsapp} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
