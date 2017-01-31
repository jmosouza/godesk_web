import React from 'react'

export const SignonForm = () => (
  <form>
    <div><input type="text" name="auth[username]" placeholder="Username"/></div>
    <div><input type="password" name="auth[password]" placeholder="Password"/></div>
    <div><input type="submit"/></div>
  </form>
)
