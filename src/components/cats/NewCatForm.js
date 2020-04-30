import React, { useContext, useRef } from 'react'
import { CatContext } from './CatProvider'
import { ToyContext } from '../toys/ToyProvider'
import { Button } from '@material-ui/core'

export const NewCatForm = (props) => {
  const { addCat } = useContext(CatContext)
  const { toys } = useContext(ToyContext)

  const name = useRef()
  const breed = useRef()
  const gender = useRef()
  const eyeColor = useRef()
  const birthday = useRef()
  const weight = useRef()
  const favToy = useRef()
  const image = useRef()
  const userId = parseInt(sessionStorage.getItem('cativity_user'))
  const filteredToys = toys.filter((toy) => toy.userId === userId)

  const constructNewCat = () => {
    addCat({
      name: name.current.value,
      breed: breed.current.value,
      gender: gender.current.value,
      eyeColor: eyeColor.current.value,
      birthday: birthday.current.value,
      weight: weight.current.value,
      favToy: favToy.current.value,
      image: image.current.value,
      userId: userId,
    }).then(props.toggle)
  }

  return (
    <form className="newCatForm">
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">
            Cat's name:
            <input
              type="text"
              name="name"
              ref={name}
              required
              autoFocus
              className="form-control"
              placeholder="Enter cat's name"
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="breed">
            Breed:
            <input
              type="text"
              name="breed"
              ref={breed}
              required
              autoFocus
              className="form-control"
              placeholder="Enter cat's breed"
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eyeColor">
            Eye color:
            <input
              type="text"
              name="eyeColor"
              ref={eyeColor}
              required
              autoFocus
              className="form-control"
              placeholder="Enter cat's eye color"
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gender">Select your cat's gender </label>
          <select
            defaultValue=""
            name="gender"
            ref={gender}
            className="form-control"
          >
            <option value="0">Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="weight">
            Weight (lbs):
            <input
              type="text"
              name="weight"
              ref={weight}
              required
              autoFocus
              className="form-control"
              placeholder="Enter cat's weight"
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="birthday">Birthday: </label>
          <input
            type="date"
            name="birthday"
            ref={birthday}
            required
            autoFocus
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="favToy">Favorite toy: </label>
          <select
            defaultValue=""
            name="gender"
            ref={favToy}
            className="form-control"
          >
            <option value="0">Select a favorite toy</option>
            {filteredToys.map((toy) => {
              return (
                <option key={toy.id} value={toy.id}>
                  {toy.name}
                </option>
              )
            })}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="image">Upload an image: </label>
          <input
            type="file"
            name="image"
            ref={image}
            required
            autoFocus
            className="form-control"
          />
        </div>
      </fieldset>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={(e) => {
          e.preventDefault()
          constructNewCat()
        }}
      >
        Save New Cat
      </Button>
    </form>
  )
}
