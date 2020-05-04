import React, { useState } from 'react'
import { Auth } from './auth/Auth'
import { Dashboard } from './Dashboard'
import { Header } from './header/Header'
import { Logo } from './header/Logo'
import './Cativity.css'

export const Cativity = () => {
  const [check, update] = useState(false)
  const toggle = () => update(!check)

  return sessionStorage.getItem('cativity_user') ? (
    <>
      <Header toggle={toggle} />
      <Dashboard />
    </>
  ) : (
    <>
      <Logo />
      <Auth toggle={toggle} />
    </>
  )
}
