import React from 'react'
import { LogCativity } from './cativities/LogCativity'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <div className="logCativity">
        <LogCativity />
      </div>
    </>
  )
}
