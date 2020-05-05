import React, { useState } from 'react'
import { Card, CardContent, Dialog, DialogContent } from '@material-ui/core'
import './Cat.css'
import { CatProvider } from './CatProvider'
import { CatProfile } from './CatProfile'
import { ToyProvider } from '../toys/ToyProvider'

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
          <CatProvider>
            <ToyProvider>
              <CatProfile cat={cat} toy={toy} />
            </ToyProvider>
          </CatProvider>
        </DialogContent>
      </Dialog>
    </>
  )
}
