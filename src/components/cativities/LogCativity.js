import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { Timer } from './Timer'
import './LogCativity.css'

export const LogCativity = () => {
  const [cativityModal, setCativityModal] = useState(false)
  const toggleCativityModal = () => setCativityModal(!cativityModal)

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={toggleCativityModal}
        className="logNewCativity"
      >
        <p className="logCativityText">Log a new Cativity!</p>
      </Button>

      <Dialog open={cativityModal} onClose={toggleCativityModal}>
        <DialogTitle>
          <p className="startCativityText">Start your Cativity</p>
        </DialogTitle>
        <DialogContent>
          <div className="timerContainer">
            <Timer toggle={toggleCativityModal} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
