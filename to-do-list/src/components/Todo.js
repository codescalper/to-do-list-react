import React from 'react'
import './style.css'


export const Todo  = () => {
  return (
    <div className='main'>
        <div className='child'>
        {/* <figure> element to mark up a photo in a document, and a <figcaption> element to define a caption for the photo:<figure> */}
        <figure>
            <img src='.\logo.svg' width={50} height={50} alt='Todo-list logo codescalper' />
            <figcaption>Create your to-do list here</figcaption>
        </figure>
        <div className='addItems'>
            <input type = "text" placeholder = "Add Items" className='form-ctrl' />
            <i class="fa fa-solid fa-plus add-btn" ></i>
        </div>
        
        </div>      
    </div>
  )
}

export default Todo;
