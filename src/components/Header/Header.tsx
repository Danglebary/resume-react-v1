import React from 'react';
import './Header.css';
// Component imports
import { AiOutlinePhone, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const Header = () => {
    return (
        <header>
            <h2 id="Home" className="header-title title-one">
                Austin
            </h2>
            <h2 className="header-title title-two">See</h2>
            <div className="header-items">
                <div className="header-item-container">
                    <GoLocation className="header-item-icon" />
                    <p className="header-item-content">Austin, TX</p>
                </div>
                <div className="header-item-container">
                    <AiOutlinePhone className="header-item-icon" />
                    <p className="header-item-content">
                        <a href="tel:+1-360-742-9825">360-742-9825</a>
                    </p>
                </div>
                <div className="header-item-container">
                    <AiOutlineMail className="header-item-icon" />
                    <p className="header-item-content">
                        <a href="mailto:austinsee@danglebary.com">
                            austinsee@danglebary.com
                        </a>
                    </p>
                </div>
                <div className="header-item-container">
                    <AiOutlineGithub className="header-item-icon" />
                    <p className="header-item-content">
                        <a
                            href="https://github.com/Danglebary"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Github/Danglebary
                        </a>
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
