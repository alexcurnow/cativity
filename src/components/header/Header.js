import React from 'react'
import { Logo } from './Logo'
import { NavBurger } from './NavBurger'
import './Header.css'

export const Header = (props) => {
  return sessionStorage.getItem('cativity_user') ? (
    <div className="header">
      <div className="nuthin"></div>
      <Logo />
      <NavBurger toggle={props.toggle} />
    </div>
  ) : (
    <div className="header">
      <Logo />
    </div>
  )
}
