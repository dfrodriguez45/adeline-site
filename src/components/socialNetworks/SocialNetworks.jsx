import React from 'react'
import { BsWhatsapp, BsFacebook } from 'react-icons/bs/index.js';

function SocialNetworks() {
    return (
        <div className='social-networks'>
            <a className='social-networks-item' target='_blank' href="https://wa.me/522221155106?text=Hola,+Buen+dia!"><BsWhatsapp className="social-networks-icon" /> <span>WhatsApp</span></a>
            <a className='social-networks-item' target='_blank' href="https://www.facebook.com/Adeline.luce.espectacular/"><BsFacebook className="social-networks-icon" /> <span>Facebook</span></a>
        </div>
    )
}

export default SocialNetworks