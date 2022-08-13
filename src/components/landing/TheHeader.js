import { headerMenu } from '../../data/header-data'
import { Close, Discord, Menu, Twitter } from '../ui/icons'
import { useLockedBody } from '../../hooks/useLockedBody'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const AppHeader = ({
                     onLinkClick = () => {
                     },
                   }) => {
  const [isMainPage, setIsMainPage] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setIsMainPage(() => location.pathname === '/')
  }, [location])


  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [locked, setLocked] = useLockedBody()

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
    setLocked((prevState => !prevState))
  }

  const handleMenuLinkClick = to => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      setLocked(false)
    }
    onLinkClick(to)
  }

  const handleResize = () => {
    const windowWidth = window.innerWidth

    if (windowWidth > 1199) {
      setLocked(false)
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className={['header', isMenuOpen && 'open'].join(' ')}>
      <div className='container padding-block-4'>
        {isMainPage ?
          (
            <div className='header__logo'
                 onClick={() => handleMenuLinkClick('#main')}>
              <img src='/assets/logo.svg' alt='Donny Doos' />
            </div>
          )
          : (
            <div className='header__logo'>
              <Link to='/#main'>
                <img src='/assets/logo.svg' alt='Donny Doos' />
              </Link>
            </div>
          )}
        <nav className='header__menu'>
          <ul className='header__menu-list list-style-none gap-6 flex'>
            {headerMenu.map(({ to, title }) => (
              isMainPage ?
                (
                  <li
                    key={to}
                    className='header__menu-list__item ff-primary ls-1 white-text'
                    onClick={() => handleMenuLinkClick(to)}
                  >{title}
                  </li>
                )
                : (
                  <li
                    key={to}
                    className='header__menu-list__item ff-primary ls-1 white-text'
                  >
                    <Link to={`/${to}`}>{title}</Link>
                  </li>
                )
            ))}
          </ul>
        </nav>
        <ul className='header__socials-list list-style-none flex gap-4'>
          {/*<li>*/}
          {/*    <a href="#">*/}
          {/*        <Discord/>*/}
          {/*    </a>*/}
          {/*</li>*/}
          <li>
            <a href='https://twitter.com/TheDonnyDoos' rel='noreferrer'
               target='_blank'>
              <Twitter />
            </a>
          </li>
          <li className='btn--nav-menu'>

            <button className='btn'
                    onClick={() => toggleMenu()}
            >
              {isMenuOpen ? <Close /> : <Menu />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default AppHeader
