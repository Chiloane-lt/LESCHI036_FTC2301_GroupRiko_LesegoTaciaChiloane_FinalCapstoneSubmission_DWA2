import SignUpForm from "../components/SignUpForm"
import logo from "../assets/talkbox-signIn.svg"

const SignUp = () => {
  return (
    <section className="w-screen h-screen bg-[url('https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center">
      <img src={logo} alt="talkBox logo" className="w-[40%] m-8" />
      <SignUpForm />
    </section>
  )
}

export default SignUp
