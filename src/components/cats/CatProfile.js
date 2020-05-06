import React, { useState } from 'react'
import { Button, Dialog, DialogContent } from '@material-ui/core'
import { EditCatForm } from './EditCatForm'
import { NewToyForm } from '../toys/NewToyForm'
import './CatProfile.css'

export const CatProfile = ({ cat, toy }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [toyForm, setToyForm] = useState(false)
  const toggleToyForm = () => setToyForm(!toyForm)

  return (
    <div className="catProfile">
      <fieldset>
        <img src={cat.image} style={{ width: '100%', height: 'auto' }} />
        <h3>{cat.name}</h3>
        <p>Breed: {cat.breed}</p>
        <p>Gender: {cat.gender}</p>
        <p>Weight: {cat.weight}</p>
        <p>Eye Color: {cat.eyeColor}</p>
        <p>Birthday: {cat.birthday}</p>
        <p>
          Favorite Toy: {toy.name}{' '}
          <span className="addToy" onClick={toggleToyForm}>
            +
          </span>
        </p>
      </fieldset>
      <Button variant="contained" color="primary" onClick={toggle}>
        Edit
      </Button>
      <Dialog open={modal} onClose={toggle}>
        <DialogContent>
          <EditCatForm cat={cat} toy={toy} toggle={toggle} />
        </DialogContent>
      </Dialog>

      <Dialog open={toyForm} onClose={toggleToyForm}>
        <DialogContent>
          <NewToyForm toggle={toggleToyForm} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
