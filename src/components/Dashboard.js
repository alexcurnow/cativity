import React from 'react'
import { LogCativity } from './cativities/LogCativity'
import './Dashboard.css'
import { CatProvider } from './cats/CatProvider'
import { CatList } from './cats/CatList'
import { ToyProvider } from './toys/ToyProvider'

export const Dashboard = () => {
  return (
    <>
      <div className="catsContainer">
        <CatProvider>
          <ToyProvider>
            <CatList />
          </ToyProvider>
        </CatProvider>
      </div>
      <div className="logCativity">
        <LogCativity />
      </div>
    </>
  )
}
