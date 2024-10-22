import { useState } from 'react' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='notion-app'>
      <div className='notion-app-inner'>
        <div className='main-header'>
        Hi There, I’m Sinai Park.
        </div>
        <div className='layout-content'>
        <div className='c1'>
        <div className='c1-inner'>
        <div className='c1-left'> 
            <h1 className='c1-1'>
          A <span className='bg-blue'>lifelong learner</span> who is constantly fascinated by <span className='bg-pink'> how human & technology </span>are changing the world; while trying to bridge the gap and provi
          </h1>

          I was a certified actuary working in the insurance industry for a couple of years and took a leap of faith to switch career track into CS.

        </div>
        <div className='c1-mid'> 
        </div>
        <div className='c1-right'>
         Welcome to the repository of my brain! 

          As an overthinker and a day dreamer, my goal this year is to start organizing my thoughts and ideas into writings.
       
        </div>
         </div>
        </div>
        </div>
         
        </div>
      </div>
      <p className="read-the-docs">
      ©️ Copyright 2024 Sinai Park
      </p>
    </>
  )
}

export default App
