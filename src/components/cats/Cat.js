import React, { useState } from 'react'
import { Card, CardContent, Dialog, DialogContent } from '@material-ui/core'
import './Cat.css'
import { CatProfile } from './CatProfile'

export const Cat = ({ cat, toy }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <>
      <Card variant="outlined" className="catCard" onClick={toggle}>
        <CardContent>
          <img
            className="catImage"
            src={cat.image}
            style={{ width: '100%', height: 'auto' }}
          />
          <h3>{cat.name}</h3>
          <fieldset className="catInfo">
            <li>Breed: {cat.breed}</li>
            <li>Eye color: {cat.eyeColor}</li>
          </fieldset>
        </CardContent>
      </Card>

      <Dialog open={modal} onClose={toggle}>
        <DialogContent>
          <CatProfile cat={cat} toy={toy} />
        </DialogContent>
      </Dialog>
    </>
  )
}
