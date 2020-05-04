import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './Cat.css'

export const Cat = ({ cat }) => {
  return (
    <Card variant="outlined" className="catCard">
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
  )
}
