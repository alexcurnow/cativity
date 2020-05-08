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
        <CardContent className="cardContent">
          <img className="catImage" src={cat.image} />
          <h1>{cat.name}</h1>
          <fieldset className="catInfo">
            <li>
              <b>Breed:</b> {cat.breed}
            </li>
            <li>
              <b>Eye color:</b> {cat.eyeColor}
            </li>
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
