import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import './NavBurger.css'
import { NewCatForm } from '../cats/NewCatForm'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { NewToyForm } from '../toys/NewToyForm'
import { ToyProvider } from '../toys/ToyProvider'
import { CatProvider } from '../cats/CatProvider'
import { CativityProvider } from '../cativities/CativityProvider'
import { CativityList } from '../cativities/CativityList'

export const NavBurger = () => {
  const [visibility, setVisibility] = useState(false)

  const toggle = () => {
    setVisibility(!visibility)
  }

  const [modal, setModal] = useState(false)
  const toggleToyModal = () => {
    setModal(!modal)
  }

  const [catModal, setCatModal] = useState(false)
  const toggleCatModal = () => {
    setCatModal(!catModal)
  }

  const [cativityListModal, setCativityListModal] = useState(false)
  const toggleCativityListModal = () => setCativityListModal(!cativityListModal)

  return visibility === false ? (
    <MenuIcon fontSize="large" onClick={toggle} className="burger" />
  ) : (
    <>
      <div className="dropdownContainer">
        <CloseIcon fontSize="large" onClick={toggle} className="close" />
        <div className="dropdown__menu">
          <li onClick={toggleCatModal}>Add a New Cat</li>
          <li onClick={toggleToyModal}>Add a New Toy</li>
          <li onClick={toggleCativityListModal}>View Cativities</li>
          <li>Remove a Cat</li>
        </div>
      </div>
      <ToyProvider>
        <Dialog open={modal} onClose={toggleToyModal}>
          <DialogContent>
            <NewToyForm toggle={toggle} />
          </DialogContent>
        </Dialog>
      </ToyProvider>

      <CatProvider>
        <ToyProvider>
          <Dialog open={catModal} onClose={toggleCatModal}>
            <DialogContent>
              <NewCatForm toggle={toggle} />
            </DialogContent>
          </Dialog>
        </ToyProvider>
      </CatProvider>

      <CatProvider>
        <ToyProvider>
          <CativityProvider>
            <Dialog open={cativityListModal} onClose={toggleCativityListModal}>
              <DialogContent>
                <CativityList />
              </DialogContent>
            </Dialog>
          </CativityProvider>
        </ToyProvider>
      </CatProvider>
    </>
  )
}
