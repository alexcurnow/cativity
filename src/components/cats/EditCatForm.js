import React, { useContext, useRef, useState } from 'react'
import { CatContext } from './CatProvider'
import { ToyContext } from '../toys/ToyProvider'
import { Button } from '@material-ui/core'

export const EditCatForm = (props) => {
  const { updateCat } = useContext(CatContext)
  const { toys } = useContext(ToyContext)

  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [updatedCat, setCat] = useState(props.cat)

  const userId = parseInt(sessionStorage.getItem('cativity_user'))
  const filteredToys = toys.filter((toy) => toy.userId === userId)

  const handleControlledInputChange = (event) => {
    const newCat = Object.assign({}, updatedCat)
    newCat[event.target.name] = event.target.value
    setCat(newCat)
  }

  const editCat = () => {
    updateCat({
      id: updatedCat.id,
      name: updatedCat.name,
      breed: updatedCat.breed,
      gender: updatedCat.gender,
      eyeColor: updatedCat.eyeColor,
      birthday: updatedCat.birthday,
      weight: parseInt(updatedCat.weight),
      favToy: parseInt(updatedCat.favToy),
      image: updatedCat.image,
      userId: userId,
    }).then(props.toggle)
  }

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'cativity')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/alexcurnow/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
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
              required
              autoFocus
              className="form-control"
              placeholder="Enter cat's name"
              defaultValue={props.cat.name}
              onChange={handleControlledInputChange}
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
              required
              autoFocus
              className="form-control"
              placeholder="Enter cat's breed"
              onChange={handleControlledInputChange}
              defaultValue={props.cat.breed}
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
              required
              autoFocus
              className="form-control"
              placeholder="Enter cat's eye color"
              onChange={handleControlledInputChange}
              defaultValue={props.cat.eyeColor}
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gender">Select your cat's gender </label>
          <select
            defaultValue={props.cat.gender}
            name="gender"
            className="form-control"
            onChange={handleControlledInputChange}
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
              required
              autoFocus
              className="form-control"
              placeholder="Enter cat's weight"
              onChange={handleControlledInputChange}
              defaultValue={props.cat.weight}
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
            required
            autoFocus
            className="form-control"
            onChange={handleControlledInputChange}
            defaultValue={props.cat.birthday}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="favToy">Favorite toy: </label>
          <select
            defaultValue={props.toy.name}
            name="favToy"
            className="form-control"
            onChange={handleControlledInputChange}
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
            name="file"
            onChange={uploadImage}
            required
            autoFocus
            className="form-control"
          />
        </div>
      </fieldset>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          color="primary"
          variant="contained"
          onClick={(e) => {
            e.preventDefault()
            editCat()
          }}
        >
          Save Updates
        </Button>
      )}
    </form>
  )
}
