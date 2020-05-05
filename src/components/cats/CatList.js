import React, { useContext } from 'react'
import { CatContext } from './CatProvider'
import { Cat } from './Cat'
import './Cat.css'
import { ToyContext } from '../toys/ToyProvider'

export const CatList = () => {
  const { cats } = useContext(CatContext)
  const { toys } = useContext(ToyContext)
  const userId = parseInt(sessionStorage.getItem('cativity_user'))
  const filteredCats = cats.filter((c) => c.userId === userId)

  return (
    <div className="catList">
      {filteredCats.map((cat) => {
        const foundToy = toys.find((t) => t.id === cat.favToy)
        return (
          <Cat key={cat.id} cat={cat} toy={foundToy} className="catSlide" />
        )
      })}
    </div>
  )
}
