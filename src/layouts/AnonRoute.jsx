/**
 * Anonymous route
 * Checks to see if user is authenticated. Blocks out authenticated users
 * NB to prvent logged in users from accessing log in and sign up page after
 * logging in
 */

function AnonRoute() {
  return (
    <div>AnonRoute</div>
  )
}

export default AnonRoute