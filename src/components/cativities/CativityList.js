import React, { useContext } from 'react'
import { CatContext } from '../cats/CatProvider'
import { ToyContext } from '../toys/ToyProvider'
import { CativityContext } from './CativityProvider'
import { CativityHTML } from './CativityHTML'

export const CativityList = () => {
  const { cats } = useContext(CatContext)
  const { toys } = useContext(ToyContext)
  const { cativities } = useContext(CativityContext)
  const userId = parseInt(sessionStorage.getItem('cativity_user'))

  const filteredCats = cats.filter((c) => c.userId === userId)
  const filteredToys = toys.filter((t) => t.userId === userId)
  const filteredCativities = cativities.filter((c) => {
    return filteredCats.find((cat) => c.catId === cat.id)
  })

  return (
    <div className="cativities">
      {filteredCativities.map((cativity) => {
        const foundCat = filteredCats.find((c) => c.id === cativity.catId)
        const foundToy = filteredToys.find((t) => t.id === cativity.toyId)

        return (
          <CativityHTML
            key={cativity.id}
            cativity={cativity}
            cat={foundCat}
            toy={foundToy}
          />
        )
      })}
    </div>
  )
}
