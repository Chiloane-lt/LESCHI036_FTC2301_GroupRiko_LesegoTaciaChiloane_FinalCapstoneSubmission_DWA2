import React from "react";

export const Signup = () => {
  return (
    <main className="bg-[url('https://cdn.pixabay.com/photo/2020/06/07/02/16/fantasy-5268744_960_720.jpg')] bg-center bg-no-repeat h-screen w-screen text-mint-cream">
      <h1 className="text-center">Talk<span>BOX</span></h1>
        <form className="flex flex-col justify-center items-center bg-transparent">
          <input type="text" id="usernamer" placeholder="Username" className="bg-transparent text-center"/>
          <input type="email" id="email" placeholder="Email" className="bg-transparent text-center"/>
          <input type="password" id="password" placeholder="Password" className="bg-transparent text-center"/>
          <input type="password" id="password-confirm" placeholder="Confirm Password" className="bg-transparent text-center"/>
          <button type="submit" className="block">Sign Up</button>
        </form>
    </main>
    )
}