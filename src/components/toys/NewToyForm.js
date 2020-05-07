import React, { useContext, useRef } from 'react'
import { ToyContext } from './ToyProvider'
import Button from '@material-ui/core/Button'
import './ToyForm.css'

export const NewToyForm = (props) => {
  const { addToy } = useContext(ToyContext)

  const name = useRef()
  const userId = parseInt(sessionStorage.getItem('cativity_user'))

  const constructNewToy = () => {
    if (name.current.value === '') {
      window.alert('Please enter a toy name')
    } else {
      addToy({
        name: name.current.value,
        userId: userId,
      }).then(props.toggle)
    }
  }

  return (
    <form className="newToyForm">
      <h2 className="newToyForm__title">New Toy</h2>
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Toy name"
          />
        </div>
      </fieldset>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault()
          constructNewToy()
        }}
      >
        Save New Toy
      </Button>
    </form>
  )
}
