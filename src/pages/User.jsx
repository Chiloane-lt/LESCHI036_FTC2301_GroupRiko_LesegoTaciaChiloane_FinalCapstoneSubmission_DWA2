import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import SignUpForm from '../components/SignUpForm'

export default function User() {
  const handleSignOut = () =>{
//Handle Log Out
  }
  return (
    <>
      <NavBar />
      <Hero />
      <button onClick={handleSignOut}
      className='bg-dark-green text-mint-cream'>Sign Out</button>
    </>
    )
}