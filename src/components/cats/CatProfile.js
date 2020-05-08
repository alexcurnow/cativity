import React, { useState, useContext } from 'react'
import { Button, Dialog, DialogContent } from '@material-ui/core'
import { EditCatForm } from './EditCatForm'
import { NewToyForm } from '../toys/NewToyForm'
import { CatContext } from './CatProvider'
import './CatProfile.css'

export const CatProfile = ({ cat, toy }) => {
  const { removeCat } = useContext(CatContext)
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [toyForm, setToyForm] = useState(false)
  const toggleToyForm = () => setToyForm(!toyForm)

  return (
    <div className="catProfile">
      <fieldset>
        <img src={cat.image} style={{ width: '100%', height: 'auto' }} />
        <h3>{cat.name}</h3>
        <p>
          <b>Breed:</b> {cat.breed}
        </p>
        <p>
          <b>Gender:</b> {cat.gender}
        </p>
        <p>
          <b>Weight:</b> {cat.weight}
        </p>
        <p>
          <b>Eye Color:</b> {cat.eyeColor}
        </p>
        <p>
          <b>Birthday:</b> {cat.birthday}
        </p>
        <p className="favToyText">
          <b>Favorite Toy: </b> {toy.name}{' '}
          <span className="addToy" onClick={toggleToyForm}>
            +
          </span>
        </p>
      </fieldset>
      <div className="profileBtns">
        <Button
          variant="outlined"
          color="primary"
          onClick={toggle}
          className="editBtn"
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className="removeBtn"
          onClick={(e) => {
            e.preventDefault()
            const confirm = window.confirm(
              'Are you sure you want to remove this cat?'
            )
            if (confirm === true) {
              removeCat(cat)
            }
          }}
        >
          Remove Cat Profile
        </Button>
      </div>
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
