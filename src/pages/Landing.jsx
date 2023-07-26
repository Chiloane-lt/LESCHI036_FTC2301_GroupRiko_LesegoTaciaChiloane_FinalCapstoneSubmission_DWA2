import Logo from '../assets/talkbox.svg'

function Landing() {
  return (
    <section className="w-screen h-screen bg-mint-cream text-eerie-black flex flex-col justify-center items-center p-8 text-center">
      <h1 className='text-4xl p-4'>
        Talk<span className='font-bold'>BOX</span>
      </h1>
      <p>
        Explore, grow and unlock the unknown with Talk<span>BOX</span> podcasts. Get your daily dose of fresh thoughts
        now!
      </p>
      <div className='py-4 w-[70%] flex justify-between'>
        <button className="bg-platinum p-2 w-24 rounded-full">Sign Up</button>
        <button className="bg-platinum p-2 w-24 rounded-full">Sign In</button>
      </div>
    </section>
  )
}

export default Landing
