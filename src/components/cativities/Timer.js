import React, { useContext, useRef, useState, useEffect } from 'react'
import { Button } from '@material-ui/core'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0)

  return (
    <div className="timerCircle">
      <div>{seconds}</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          window.setInterval(() => {
            setSeconds((seconds) => seconds + 1)
          }, 1000)
          e.target.disabled = true
        }}
      >
        Start Cativity
      </Button>
    </div>
  )
}
