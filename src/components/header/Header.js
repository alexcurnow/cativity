import React from 'react'
import { Logo } from './Logo'
import { NavBurger } from './NavBurger'
import './Header.css'

export const Header = () => {
  return sessionStorage.getItem('cativity_user') ? (
    <div className="header">
      <Logo />
      <NavBurger />
    </div>
  ) : (
    <div className="header">
      <Logo />
    </div>
  )
}
