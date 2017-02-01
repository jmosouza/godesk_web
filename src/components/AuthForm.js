import React from 'react'

export const AuthForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div><input type="text" name="auth[username]" id="auth_username" placeholder="Username"/></div>
    <div><input type="password" name="auth[password]" id="auth_password" placeholder="Password"/></div>
    <div><input type="submit"/></div>
  </form>
)

AuthForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
}
