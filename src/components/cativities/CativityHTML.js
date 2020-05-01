import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

export const CativityHTML = ({ cativity, cat, toy }) => {
  const [date, time] = cativity.date.split(',')
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h3">{cat.name}</Typography>
          <Typography variant="body1">
            Date of Cativity: {date}
            <br />
            Time of Cativity: {time}
          </Typography>
          <Typography variant="body1">
            Toy played with:{toy.name}
            {}
          </Typography>
          <Typography variant="body1">Notes: {cativity.notes}</Typography>
        </CardContent>
      </Card>
    </>
  )
}
