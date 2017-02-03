import React from 'react'

export const AuthForm = (props) => (
  <form className="form-signin" onSubmit={props.handleSubmit}>
    <input type="text"
      name="auth[username]"
      id="auth_username"
      className="form-control"
      placeholder="Username"/>
    <input type="password"
      name="auth[password]"
      id="auth_password"
      className="form-control"
      placeholder="Password"/>
    <input type="submit"
      value="Go"
      className="btn btn-lg btn-primary"/>
  </form>
)

AuthForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
}
