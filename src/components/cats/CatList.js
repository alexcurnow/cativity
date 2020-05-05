import React, { useContext, useEffect, useState } from 'react'
import { CatContext } from './CatProvider'
import { Cat } from './Cat'
import './Cat.css'
import { ToyContext } from '../toys/ToyProvider'

export const CatList = () => {
  const { cats } = useContext(CatContext)
  const { toys } = useContext(ToyContext)

  const [filteredCats, setFilteredCats] = useState([])

  useEffect(() => {
    const userId = parseInt(sessionStorage.getItem('cativity_user'))

    setFilteredCats(cats.filter((c) => c.userId === userId))
  }, [cats])

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
