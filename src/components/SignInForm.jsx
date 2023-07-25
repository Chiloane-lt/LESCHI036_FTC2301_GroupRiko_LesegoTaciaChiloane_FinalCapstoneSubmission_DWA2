import { useState } from "react";
import { supabase } from '../supabaseClient'
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
try {

  let { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if(error) throw error;
  navigate('/')

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
    type="submit">Sign In</button>
  </form>
  )
}

export default SignInForm