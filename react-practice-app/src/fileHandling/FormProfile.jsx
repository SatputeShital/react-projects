import React from 'react'
import './style.css'
import ImageUploadPreview from './ImageUploadPreview'
import Range from './Range'
import PersonalDetails from './PersonalDetails'

const FormProfile = () => {
  return (
    <>
  <div id='main'>
    
  <div id='img-range'>
       <div id='imgUp'>
      <ImageUploadPreview/>

       </div>
       <div id='langrange'>
       <Range/>
       </div>
    </div>
    <div id='details'>
    <h2>Profile Page</h2>
    <PersonalDetails/>
    </div>
  </div>
    </>
    
  )
}

export default FormProfile
