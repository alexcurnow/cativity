import React, { useRef } from 'react'
import Button from '@material-ui/core/Button'

export const Register = (props) => {
  const fullName = useRef()
  const email = useRef()
  const password = useRef()
  const verifyPassword = useRef()

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((res) => res.json())
      .then((user) => {
        if (user.length) {
          return true
        }
        return false
      })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then(() => {
        fetch('http://localhost:8088/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            name: fullName.current.value,
          }),
        })
          .then((_) => _.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty('id')) {
              sessionStorage.setItem('cativity_user', createdUser.id)
            }
          })
          .then(props.toggle)
      })
    } else {
      window.alert('Passwords do not match')
    }
  }

  return (
    <main className="container--login">
      <form className="form--register" onSubmit={handleRegister}>
        <h4 className="darkgray">
          If you are not yet a user, please register a new account
        </h4>
        <fieldset>
          <label htmlFor="firstName"> Full Name </label>
          <input
            ref={fullName}
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input
            ref={email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="verifyPassword"> Verify Password </label>
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            placeholder="Verify password"
            required
          />
        </fieldset>
        <fieldset>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            type="submit"
          >
            Sign in
          </Button>
        </fieldset>
      </form>
    </main>
  )
}
