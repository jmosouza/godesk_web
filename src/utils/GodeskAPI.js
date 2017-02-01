// JWT authentication token
var jwt = null

// This is the base domain for all API endpoints.
const domain = 'https://godesk-api.herokuapp.com'
// From here on, API endpoints using the base domain.
const customerSignUpURL = `${domain}/customer_signup`

// Common headers for all API requests.
const headers = new Headers({
  'Accept'        : 'application/json',
  'Content-Type'  : 'application/json',
  'Authorization' : `Bearer ${jwt}`,
})

export default class GodeskApi {

  static signUp(username, password, onSuccess, onError) {
    const method = 'post'
    const body = JSON.stringify({
      auth: { username, password }
    })
    const fetchOptions = { method, headers, body }
    fetch(customerSignUpURL, fetchOptions)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          // Successful response
          res.json().then(res => {
            jwt = res.jwt // set jwt token
            onSuccess()   // success callback
          })
        }
        else if (res.status >= 400 && res.status < 500) {
          // Problem response with server message
          res.json().then(res =>
            alert(res.join('. ')) // alert error messages
          )
        }
        else {
          // Unexpected error
          alert('Sorry, we are unable to sign you up at this moment. Everything will be back to normal in a few minutes.')
          // TODO: Add crash analytics
        }
      })
      .catch(onError)
  }
}
