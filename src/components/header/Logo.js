import React from 'react'
import PetsIcon from '@material-ui/icons/Pets'
import './Logo.css'

import Typography from '@material-ui/core/Typography'

export const Logo = () => (
  <div className="logo">
    <PetsIcon fontSize="large" />
    <Typography variant="h6">Cativity</Typography>
  </div>
)
