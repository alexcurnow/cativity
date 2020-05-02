import React, { useContext } from 'react'
import { CatContext } from './CatProvider'
import { Cat } from './Cat'
import './Cat.css'

export const CatList = () => {
  const { cats } = useContext(CatContext)
  const userId = parseInt(sessionStorage.getItem('cativity_user'))
  const filteredCats = cats.filter((c) => c.userId === userId)

  return (
    <div className="cats">
      {filteredCats.map((cat) => (
        <Cat key={cat.id} cat={cat} className="catSlide" />
      ))}
    </div>
  )
}
