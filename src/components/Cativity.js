import React, { useState } from 'react'
import { Auth } from './auth/Auth'
import { Dashboard } from './Dashboard'
import { Header } from './header/Header'
import { Logo } from './header/Logo'
import './Cativity.css'
import { CatProvider } from './cats/CatProvider'
import { ToyProvider } from './toys/ToyProvider'

export const Cativity = () => {
  const [check, update] = useState(false)
  const toggle = () => update(!check)

  return sessionStorage.getItem('cativity_user') ? (
    <>
      <CatProvider>
        <ToyProvider>
          <Header toggle={toggle} />
          <Dashboard />
        </ToyProvider>
      </CatProvider>
    </>
  ) : (
    <>
      <Logo />
      <Auth toggle={toggle} />
    </>
  )
}
