import React from 'react'
import { Card, CardContent } from '@material-ui/core'

export const Cat = ({ cat }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <h3>{cat.name}</h3>
        <fieldset className="catInfo">
          <li>Breed: {cat.breed}</li>
          <li>Eye color: {cat.eyeColor}</li>
        </fieldset>
      </CardContent>
    </Card>
  )
}
