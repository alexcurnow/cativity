import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)
      return () => window.clearInterval(id)
    }
    return undefined
  }, [isRunning])

  return (
    <>
      <div className="timerCircle">
        <div>{seconds}</div>
      </div>
      <div className="start-end-buttons">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsRunning(true)}
        >
          Start Cativity
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setIsRunning(false)}
        >
          End Cativity
        </Button>
      </div>
    </>
  )
}
