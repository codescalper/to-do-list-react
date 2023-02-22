import React, {useState} from 'react'
import './style.css'


export const Todo  = () => {

    const [inputdata , setInputData] = useState("");
    const [item , setItem] = useState([]);
    
    function addItem(){
        if(!inputdata){
            alert('Please fill the data');
        }else{
            setItem([...item, inputdata]);

            setInputData("  ")
        }
    }

  return (
    <div className='main'>
        <div className='child'>
        {/* <figure> element to mark up a photo in a document, and a <figcaption> element to define a caption for the photo:<figure> */}
        <figure>
            <img src='.\logo.svg' width={50} height={50} alt='Todo-list logo codescalper' />
            <figcaption>Create your to-do list here</figcaption>
        </figure>
        <div className='addItems'>
            <input type = "text" placeholder = "Add Items" className='form-ctrl' value={inputdata} onChange={(e)=> setInputData(e.target.value)} />
            <i class="fa fa-solid fa-plus add-btn" onClick={addItem} ></i>
        </div>
        <div className='showItems'>
        {item.map((currElem,index)=>{
            return(
                  <div className='eachItem' key={index}>
                  <h3>{currElem}  </h3>
                  <div className='todo-btn'>
                  <i class="fa fa-solid fa-edit add-btn" ></i>
                  <i class="fa fa-solid fa-trash add-btn" ></i>
                  </div>  
                  </div>
                      )
                 })}
        
        </div>

         <div className='showItems'>
          <button className='btn effect' data-sm-link-text="Remove All" ><span>Check List</span></button>
        </div>
        </div>      
    </div>
  )
}

export default Todo;
