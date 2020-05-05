import React, { useState } from 'react'
import { Button, Dialog, DialogContent } from '@material-ui/core'
import { EditCatForm } from './EditCatForm'

export const CatProfile = ({ cat, toy }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

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
        <p>Favorite Toy: {toy.name}</p>
      </fieldset>
      <Button variant="contained" color="primary" onClick={toggle}>
        Edit
      </Button>
      <Dialog open={modal} onClose={toggle}>
        <DialogContent>
          <EditCatForm cat={cat} toy={toy} toggle={toggle} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
