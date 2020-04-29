import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import './NavBurger.css'

export const NavBurger = () => {
  const [visibility, setVisibility] = useState(false)
  const toggle = () => {
    setVisibility(!visibility)
  }

  return visibility === false ? (
    <MenuIcon fontSize="large" onClick={toggle} />
  ) : (
    <>
      <CloseIcon fontSize="large" onClick={toggle} />
      <div className="dropdownMenu">
        <li>Add Cat</li>
      </div>
    </>
  )
}
