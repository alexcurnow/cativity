import React, { useState, useEffect } from 'react'

export const CativityContext = React.createContext()

export const CativityProvider = (props) => {
  const [cativities, setCativities] = useState([])

  const getCativities = () => {
    return fetch('https://cativity-api.herokuapp.com/cativities')
      .then((res) => res.json())
      .then(setCativities)
  }

  const addCativity = (cativity) => {
    return fetch('https://cativity-api.herokuapp.com/cativities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cativity),
    }).then(getCativities)
  }

  const removeCativity = (cativity) =>
    fetch(`https://cativity-api.herokuapp.com/cativities/${cativity.id}`, {
      method: 'DELETE',
    }).then(getCativities)

  const updateCativity = (cativity) =>
    fetch(`https://cativity-api.herokuapp.com/cativities/${cativity.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cativity),
    }).then(getCativities)

  useEffect(() => {
    getCativities()
  }, [])

  useEffect(() => {
    console.log('****  CATIVITY APPLICATION STATE CHANGED  ****')
  }, [cativities])

  return (
    <CativityContext.Provider
      value={{
        cativities,
        addCativity,
        removeCativity,
        updateCativity,
      }}
    >
      {props.children}
    </CativityContext.Provider>
  )
}
