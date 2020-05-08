import React, { useContext, useRef, useState } from 'react'
import { CatContext } from './CatProvider'
import { ToyContext } from '../toys/ToyProvider'
import { NewToyForm } from '../toys/NewToyForm'
import { Button, DialogContent, Dialog } from '@material-ui/core'
import './CatForm.css'

export const NewCatForm = (props) => {
  const { addCat } = useContext(CatContext)
  const { toys } = useContext(ToyContext)

  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const name = useRef()
  const breed = useRef()
  const gender = useRef()
  const eyeColor = useRef()
  const birthday = useRef()
  const weight = useRef()
  const favToy = useRef()
  const userId = parseInt(sessionStorage.getItem('cativity_user'))
  const filteredToys = toys.filter((toy) => toy.userId === userId)

  const constructNewCat = () => {
    addCat({
      name: name.current.value,
      breed: breed.current.value,
      gender: gender.current.value,
      eyeColor: eyeColor.current.value,
      birthday: birthday.current.value,
      weight: parseInt(weight.current.value),
      favToy: parseInt(favToy.current.value),
      image: image,
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
      <h3>New Cat</h3>
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            name="name"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Enter cat's name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            name="breed"
            ref={breed}
            required
            autoFocus
            className="form-control"
            placeholder="Enter cat's breed"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            name="eyeColor"
            ref={eyeColor}
            required
            autoFocus
            className="form-control"
            placeholder="Enter cat's eye color"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
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
          <input
            type="text"
            name="weight"
            ref={weight}
            required
            autoFocus
            className="form-control"
            placeholder="Enter cat's weight"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Select cat's birthday</label>
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
          <span className="addToyText">Add New Toy</span>
          <span className="addToyBtn" onClick={toggle}>
            +
          </span>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
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
      )}
      <Dialog open={modal} onClose={toggle}>
        <DialogContent>
          <NewToyForm toggle={toggle} />
        </DialogContent>
      </Dialog>
    </form>
  )
}
