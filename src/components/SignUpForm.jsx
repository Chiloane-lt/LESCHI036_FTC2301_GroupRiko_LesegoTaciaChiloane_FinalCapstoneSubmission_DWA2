import { useState } from "react"
import { supabase } from '../supabaseClient'

export default function SignUpForm() {
  const [ formData, setFormData ] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
try {
  const { data, error } = await supabase.auth.signUp(
  {
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        surname: formData.surname,
        username: formData.surname,
      }
    }
  }
)
if (error) throw error
alert('Check your email for verification link.')

} catch(error){
  alert(error)
}

  }

  const handleChange = (e) => {
    setFormData((prevState)=>{
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

return (
  <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
    <input className="border border-solid border-dark-green"
    type="text"
    name='name'
    placeholder="name"
    required
    onChange={handleChange}
    />

    <input className="border border-solid border-dark-green"
    type="text"
    name='surname'
    placeholder="surname"
    required
    onChange={handleChange}
    />

    <input className="border border-solid border-dark-green"
    type="text"
    name='username'
    placeholder="username"
    required
    onChange={handleChange}
    />

    <input className="border border-solid border-dark-green"
    type="email"
    name='email'
    placeholder="email"
    required
    onChange={handleChange}
    />

    <input className="border border-solid border-dark-green"
    type="password"
    name='password'
    placeholder="password"
    required
    onChange={handleChange}
    />

    <button className="border border-solid border-dark-green"
    type="submit">Sign Up</button>
  </form>
)
}