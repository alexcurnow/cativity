import React, { useContext, useRef } from 'react'
import { ToyContext } from '../toys/ToyProvider'
import { CatContext } from '../cats/CatProvider'
import { Button } from '@material-ui/core'
import { CativityContext } from '../cativities/CativityProvider'

export const CativityNotesForm = (props) => {
  const { toys } = useContext(ToyContext)
  const { cats } = useContext(CatContext)
  const { addCativity } = useContext(CativityContext)

  const userId = parseInt(sessionStorage.getItem('cativity_user'))
  const filteredToys = toys.filter((t) => t.userId === userId)
  const filteredCats = cats.filter((c) => c.userId === userId)

  const notes = useRef()
  const toy = useRef()
  const cat = useRef()

  const buildNewCativity = () => {
    addCativity({
      date: new Date().getTime(),
      // length: props.length,
      toyId: parseInt(toy.current.value),
      catId: parseInt(cat.current.value),
      notes: notes.current.value,
    }).then(props.toggle())
  }

  return (
    <form className="cativityNotesForm">
      <fieldset>
        <label>
          Your Cativity play date was {props.length[0]}mins and{' '}
          {props.length[1]}s long
        </label>
        <div>
          <label>Which toy did you play with?</label>
          <select ref={toy}>
            <option value="0">Select a toy</option>
            {filteredToys.map((toy) => (
              <option value={toy.id}>{toy.name}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Which cat did you play with? </label>
          <select ref={cat}>
            <option value="0">Select a cat </option>
            {filteredCats.map((cat) => (
              <option value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>How was your Cativity play sesh? </label>
          <input
            type="text"
            ref={notes}
            required
            autoFocus
            placeholder="Take some notes here..."
          />
        </div>
      </fieldset>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={(e) => {
          e.preventDefault()
          buildNewCativity()
          props.toggle()
        }}
      >
        Submit
      </Button>
    </form>
  )
}
