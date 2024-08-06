import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagevictor from './assets/images/imagevictor.jpg'
import bgpatterncard from './assets/images/bgpatterncard.svg'

function App() {
  

  return (
    <>
    <div className='ProfileCard'>
      
      <img className='HeaderImage' src={bgpatterncard} />
      
       
     
      <div className='ProfileInfo'>
        <img className='ProfilePic' src={imagevictor} />
        <div className='ProfileNameLocation'>
          <label className='ProfileName'>Victor crest   26</label>
          <label className='location'>London</label>
         
        </div>
        <div className='collectall'>
          <div className='numberswtitels'>
            <h2>80k</h2>
            <p>Followers</p>
          </div>
          <div className='numberswtitels'>
            <h2>803k</h2>
            <p>Likes</p>
          </div>
          <div className='numberswtitels'>
            <h2>104k</h2>
            <p>Photos</p>
          </div>

        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
