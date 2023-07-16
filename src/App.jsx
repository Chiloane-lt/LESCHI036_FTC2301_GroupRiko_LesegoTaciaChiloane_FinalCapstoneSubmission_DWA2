import { useState } from 'react'
import Logo from './assets/talkbox-inverted.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <><nav className='w-16 flex'>
      <img src={Logo} className='w-4/5'></img>
      <FontAwesomeIcon icon={faBars}/>
    </nav>
    </>
  )
}

export default App
