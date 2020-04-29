import React, { useState } from 'react'
import { Logo } from './header/Logo'
import { Auth } from './auth/Auth'
import { Dashboard } from './Dashboard'

export const Cativity = () => {
  const [check, update] = useState(false)
  const toggle = () => update(!check)

  return sessionStorage.getItem('cativity_user') ? (
    <>
      <Logo />
      <Dashboard />
    </>
  ) : (
    <>
      <Logo />
      <Auth toggle={toggle} />
    </>
  )
}
