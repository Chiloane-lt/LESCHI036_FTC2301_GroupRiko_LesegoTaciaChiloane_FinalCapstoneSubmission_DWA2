import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../supabaseClient';
import { AuthContext } from "../hooks/AuthContext";

const SignInForm = () => {
  const [ auth, setAuth ] = useContext(AuthContext);
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
try {

  let { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if(error) throw error;
  navigate('/', {replace: true})
  setAuth(data)

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