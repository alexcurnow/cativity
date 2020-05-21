import React, { useState, useEffect } from 'react'

export const CatContext = React.createContext()

export const CatProvider = (props) => {
  const [cats, setCats] = useState([])

  const getCats = () => {
    return fetch('https://cativity-api.herokuapp.com/cats')
      .then((res) => res.json())
      .then(setCats)
  }

  const addCat = (cat) => {
    return fetch('https://cativity-api.herokuapp.com/cats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cat),
    }).then(getCats)
  }

  const removeCat = (cat) =>
    fetch(`https://cativity-api.herokuapp.com/cats/${cat.id}`, {
      method: 'DELETE',
    }).then(getCats)

  const updateCat = (cat) =>
    fetch(`https://cativity-api.herokuapp.com/cats/${cat.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cat),
    }).then(getCats)

  useEffect(() => {
    getCats()
  }, [])

  useEffect(() => {
    console.log('****  CAT APPLICATION STATE CHANGED  ****')
  }, [cats])

  return (
    <CatContext.Provider
      value={{
        cats,
        addCat,
        removeCat,
        updateCat,
      }}
    >
      {props.children}
    </CatContext.Provider>
  )
}
