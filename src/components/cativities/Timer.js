import React, { useState, useEffect } from 'react'
import { Button, DialogContent, Dialog } from '@material-ui/core'
import './Timer.css'
import { ToyProvider } from '../toys/ToyProvider'
import { CativityNotesForm } from './CativityNotesForm'
import { CatProvider } from '../cats/CatProvider'
import { CativityProvider } from './CativityProvider'

export const Timer = (props) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const length = [minutes, seconds]

  useEffect(() => {
    if (isRunning) {
      const s = window.setInterval(() => {
        setSeconds((seconds) =>
          seconds > 0 && seconds % 59 === 0 ? seconds - 59 : seconds + 1
        )
      }, 1000)
      const m = window.setInterval(() => {
        setMinutes((minutes) => minutes + 1)
      }, 1000 * 60)
      return () => {
        window.clearInterval(s)
        window.clearInterval(m)
      }
    }
    return undefined
  }, [isRunning])

  return (
    <>
      <div className="timer">
        <div className="timerCircle">
          {seconds < 10 && minutes < 10 ? (
            <div>
              0{minutes}:0{seconds}
            </div>
          ) : (
            <div>
              {minutes}:{seconds}
            </div>
          )}
        </div>
        <div className="start-end-buttons">
          {isRunning ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setIsRunning(false)
                toggle()
              }}
            >
              End Cativity
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsRunning(true)}
            >
              Start Cativity
            </Button>
          )}
        </div>
        <Dialog open={modal} onClose={toggle}>
          <DialogContent>
            <ToyProvider>
              <CatProvider>
                <CativityProvider>
                  <CativityNotesForm length={length} toggle={props.toggle} />
                </CativityProvider>
              </CatProvider>
            </ToyProvider>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
