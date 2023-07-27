import { Link } from "react-router-dom"
import SignUpForm from "../components/SignUpForm"

const SignUp = () => {
  return (
    <main className="bg-[url('https://cdn.pixabay.com/photo/2020/06/07/02/16/fantasy-5268744_960_720.jpg')] bg-center bg-no-repeat h-screen w-screen text-mint-cream">
      <h1 className="text-center">Talk<span>BOX</span></h1>
      <SignUpForm />
      <Link to={'signin'}
      className="underline">
        Already have an account?
      </Link>
    </main>
    )
}

export default SignUp