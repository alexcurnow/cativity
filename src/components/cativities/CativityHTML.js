import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Cativities.css'

export const CativityHTML = ({ cativity, cat, toy }) => {
  const [date, time] = cativity.date.split(',')
  return (
    <>
      <div className="cativityCard">
        <Card>
          <CardContent>
            <img src={cat.image} className="catImg" />
            <Typography variant="h3">{cat.name}</Typography>
            <Typography variant="body1">
              <b>Date of Cativity:</b> {date}
              <br />
              <b>Time of Cativity:</b> {time}
            </Typography>
            <Typography variant="body1">
              <b>Toy played with:</b> {toy.name}
            </Typography>
            <Typography variant="body1">
              <b>Notes:</b> {cativity.notes}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
