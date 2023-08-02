import { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { supabase } from "../supabaseClient"
import { AuthContext } from "../hooks/AuthContext"

const SignInForm = () => {
  const [auth, setAuth] = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) throw error
      navigate("/", { replace: true })
      setAuth(data)
    } catch (error) {
      alert(error)
    }
  }

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
      <input
        className="border border-solid border-dark-green p-2 m-2 w-[95%] text-[#2C483A]"
        type="email"
        name="email"
        placeholder="email"
        autoComplete="on"
        required
        onChange={handleChange}
      />

      <input
        className="border border-solid border-dark-green p-2 m-2 w-[95%] text-[#2C483A]"
        type="password"
        name="password"
        placeholder="password"
        autoComplete="on"
        required
        onChange={handleChange}
      />

      <button className="bg-[#EAE6CF] text-2xl text-[#2C483A] w-[95%] p-2 m-2" type="submit">
        Sign In
      </button>
      <p className="text-[#FCFAEE]">
        Don&apos;t have an account?{" "}
        <Link to={"/signup"} className="underline decoration-solid">
          Sign Up
        </Link>
      </p>
    </form>
  )
}

export default SignInForm
