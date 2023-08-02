import { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { supabase } from "../supabaseClient"
import { AuthContext } from "../hooks/AuthContext"

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            surname: formData.surname,
          },
        },
      })
      if (error) throw error
      alert("Check your email for verification link.")
      navigate("/")
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
        type="text"
        name="name"
        placeholder="name"
        required
        onChange={handleChange}
      />

      <input
        className="border border-solid border-dark-green p-2 m-2 w-[95%] text-[#2C483A]"
        type="text"
        name="surname"
        placeholder="surname"
        required
        onChange={handleChange}
      />

      <input
        className="border border-solid border-dark-green p-2 m-2 w-[95%] text-[#2C483A]"
        type="email"
        name="email"
        placeholder="email"
        required
        onChange={handleChange}
      />

      <input
        className="border border-solid border-dark-green p-2 m-2 w-[95%] text-[#2C483A]"
        type="password"
        name="password"
        placeholder="password"
        required
        onChange={handleChange}
      />

      <button className="bg-[#EAE6CF] text-2xl text-[#2C483A] w-[95%] p-2 m-2" type="submit">
        Sign Up
      </button>
      <p className="text-[#FCFAEE]">
        Already have an account?{" "}
        <Link to={"/signin"} className="underline decoration-solid">
          Sign In
        </Link>
      </p>
    </form>
  )
}
