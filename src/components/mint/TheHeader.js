import React from 'react';
import {headerMenu} from "../../data/header-data";
import {Close, Discord, Menu, Twitter} from "../ui/icons";
import {useLockedBody} from "../../hooks/useLockedBody";

const TheHeader = ({onLinkClick}) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [locked, setLocked] = useLockedBody()

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState)
        setLocked((prevState => !prevState))
    };

    const handleMenuLinkClick = to => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
            setLocked(false)
        }
        onLinkClick(to)
    }

    return (
        <header className={['header', isMenuOpen && 'open'].join(' ')}>
            <div className="container padding-block-4">
                <div className="header__logo" onClick={() => handleMenuLinkClick('#main')}>
                    <img src="/assets/logo.svg" alt="Donny Doos"/>
                </div>
                <nav className="header__menu">
                    <ul className="header__menu-list list-style-none gap-6 flex">
                        {headerMenu.map(({to, title}) => (
                            <li key={to} className="header__menu-list__item ff-primary ls-1 white-text"
                                onClick={() => handleMenuLinkClick(to)}
                            >{title}
                            </li>
                        ))}
                    </ul>
                </nav>
                <ul className="header__socials-list list-style-none flex gap-4">
                    <li>
                        <a href="#">
                            <Discord/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Twitter/>
                        </a>
                    </li>
                    <li>
                        <button className="btn btn--nav-menu"
                                onClick={() => toggleMenu()}
                        >
                            {isMenuOpen ? <Close/> : <Menu/>}
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default TheHeader;
