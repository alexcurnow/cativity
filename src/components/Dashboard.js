import React from 'react'
import { LogCativity } from './cativities/LogCativity'
import './Dashboard.css'
import { CatProvider } from './cats/CatProvider'
import { CatList } from './cats/CatList'

export const Dashboard = () => {
  return (
    <>
      <div className="catsContainer">
        <CatProvider>
          <CatList />
        </CatProvider>
      </div>
      <div className="logCativity">
        <LogCativity />
      </div>
    </>
  )
}
