import React from 'react'

export const CatProfile = ({ cat, toy }) => {
  return (
    <div className="catProfile">
      <fieldset>
        <img src={cat.image} style={{ width: '100%', height: 'auto' }} />
        <h3>{cat.name}</h3>
        <p>Breed: {cat.breed}</p>
        <p>Gender: {cat.gender}</p>
        <p>Weight: {cat.weight}</p>
        <p>Eye Color: {cat.eyeColor}</p>
        <p>Birthday: {cat.birthday}</p>
        <p>Favorite Toy: {toy.name}</p>
      </fieldset>
    </div>
  )
}
