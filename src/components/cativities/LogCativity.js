import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { Timer } from './Timer'

export const LogCativity = () => {
  const [cativityModal, setCativityModal] = useState(false)
  const toggleCativityModal = () => setCativityModal(!cativityModal)

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleCativityModal}
        className="logNewCativity"
      >
        Log a new Cativity!
      </Button>

      <Dialog open={cativityModal} onClose={toggleCativityModal}>
        <DialogTitle>Log your Cativity!</DialogTitle>
        <DialogContent>
          <Timer />
        </DialogContent>
      </Dialog>
    </>
  )
}
