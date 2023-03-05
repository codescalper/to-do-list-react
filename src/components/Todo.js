import React, {useState,useEffect} from 'react'
import './style.css'

// getting localStorage Data

function getLocalData(){
    const list = localStorage.getItem("todolist");
  
    if(list){
      return JSON.parse(list);
  
    }else{
      return [];
    }
  }


export const Todo  = () => {

    const [inputData , setInputData] = useState("");
    const [item , setItem] = useState(getLocalData());
    
    function addItem(){
        if(!inputData){
            alert('Please fill the data');
        }else{

            const myNewInputData = {
                id: new Date().getTime().toString(),
                name:inputData,
            }
            setItem([...item, myNewInputData]);

            setInputData("  ")
        }
    }

    function deleteItem(index) {
        const updatedItems = item.filter((currElem)=>{
            return currElem.id!==index;

        })
        setItem(updatedItems);
    }   


    function removeAll(){
        setItem([]);
    }

    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(item));
      }, [item]);

  return (
    <div className='main'>
        <div className='child'>
        {/* <figure> element to mark up a photo in a document, and a <figcaption> element to define a caption for the photo:<figure> */}
        <figure>
            <img src='.\logo.png' width={50} height={50} alt='Todo-list logo codescalper' />
            <figcaption>Create your to-do list here</figcaption>
        </figure>
        <div className='addItems'>
            <input type = "text" placeholder = "Add Items" className='form-ctrl' value={inputData} onChange={(e)=> setInputData(e.target.value)} />
            <i className="fa fa-solid fa-plus add-btn" onClick={addItem}></i>
        </div>
        <div className='showItems'>
        {item.map((currElem,index)=>{
            return(
                  <div className='eachItem' key={currElem.id}>
                  <h3>{currElem.name}  </h3>
                  <div className='todo-btn'>
                  <i className="far fa-solid fa-edit add-btn" ></i>
                  <i className="far fa-solid fa-trash-alt add-btn" onClick={()=>deleteItem(currElem.id)} ></i>
                  </div>  
                  </div>
                      )
                 })}
        
        </div>

         <div className='showItems'>
          <button className='btn effect' data-sm-link-text="Remove All" onClick={removeAll} ><span>Check List</span></button>
        </div>
        </div>      
    </div>
  )
}

export default Todo;
