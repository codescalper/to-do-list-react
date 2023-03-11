import React, { useEffect, useState } from "react";
import "./style.css";

// getting localStorage Data

function getLocalData() {
  const list = localStorage.getItem("todolist");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  function addItem() {
    if (!inputData) {
      alert("Please fill the data");
    } else if (inputData && toggleButton) {
      setItem(
        item.map((currElem) => {
          if (currElem.id === isEditItem) {
            return { ...currElem, name: inputData };
          }
          return currElem;
        })
      );
      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      };
      setItem([...item, myNewInputData]);

      setInputData("");
    }
  }
  // For editing items

  function edititem(index) {
    const item_edited = item.find((currElem) => {
      return currElem.id === index;
    });
    setInputData(item_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  }

  function deleteItem(index) {
    const updatedItems = item.filter((currElem) => {
      return currElem.id !== index;
    });
    setItem(updatedItems);
  }

  function removeAll() {
    setItem([]);
  }

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(item));
  }, [item]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addItem();
    }
  };



  return (
    <div className="main">
      <div className="child">
        {/* <figure> element to mark up a photo in a document, and a <figcaption> element to define a caption for the photo:<figure> */}
        <figure>
          <img
            src=".\list.png"
            width={50}
            height={50}
            alt="Todo-list logo codescalper"
          />
          <figcaption>Create your to-do list here</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="Add Items"
            className="form-ctrl"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {toggleButton ? (
            <i
              className="fa fa-edit add-btn"
              title="Add item"
              onClick={addItem}
            ></i>
          ) : (
            <i
              className="fa fa-plus add-btn"
              title="Add item"
              onClick={addItem}
            ></i>
          )}
        </div>
        <div className="showItems">
          {item.map((currElem, index) => {
            return (
              <div className="eachItem" key={currElem.id}>
                <h3>{currElem.name} </h3>
                <div className="todo-btn">
                  <i
                    className="far  fa-edit add-btn"
                    onClick={() => edititem(currElem.id)}
                  ></i>
                  <i
                    className="far  fa-trash-alt add-btn"
                    onClick={() => deleteItem(currElem.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="showItems">
          <button
            className="btn effect"
            data-sm-link-text="Remove All"
            onClick={removeAll}
          >
            <span>Check List</span>
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Todo;
