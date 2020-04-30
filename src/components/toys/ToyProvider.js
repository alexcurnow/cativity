import React, { useState, useEffect } from 'react'

export const ToyContext = React.createContext()

export const ToyProvider = (props) => {
  const [toys, setToys] = useState([])

  const getToys = () => {
    return fetch('http://localhost:8088/toys')
      .then((res) => res.json())
      .then(setToys)
  }

  const addToy = (toy) => {
    return fetch('http://localhost:8088/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toy),
    }).then(getToys)
  }

  const removeToy = (toy) =>
    fetch(`http://localhost:8088/toys/${toy.id}`, {
      method: 'DELETE',
    }).then(getToys)

  useEffect(() => {
    getToys()
  }, [])

  useEffect(() => {
    console.log('****  TOY STATE CHANGED  ****')
  }, [toys])

  return (
    <ToyContext.Provider
      value={{
        toys,
        addToy,
        removeToy,
      }}
    >
      {props.children}
    </ToyContext.Provider>
  )
}
