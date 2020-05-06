import React, { useState } from 'react'
import { LogCativity } from './cativities/LogCativity'
import './Dashboard.css'
import { CatList } from './cats/CatList'

export const Dashboard = () => {
  return (
    <>
      <div className="catsContainer">
        <CatList />
      </div>
      <div className="logCativity">
        <LogCativity />
      </div>
    </>
  )
}
