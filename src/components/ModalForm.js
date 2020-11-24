import React, { useState } from "react";
import Modal from "react-modal";
import { IoIosOptions, IoIosAddCircleOutline } from "react-icons/io";

const ModalForm = ({ item, createPhrase, deletePhrase }) => {
  const [newText, setNewText] = useState(item.text);
  const [newSpeed, setNewSpeed] = useState(item.speed);
  const [newCss, setNewCss] = useState("This is new");
  const [modalIsOpen, setIsOpen] = useState(false);

  const optionBtn = (
    <IoIosOptions className="options-btn" onClick={changeModal} />
  );
  const addBtn = (
    <IoIosAddCircleOutline className="options-btn" onClick={changeModal} />
  );

  function updateText(e) {
    let myText = e.target.value;
    setNewText(myText);
  }

  function updateSpeed(e) {
    let mySpeed = parseInt(e.target.value);
    setNewSpeed(mySpeed);
  }

  function updateStyle(e){
    let myStyle=e.target.value
    setNewCss(myStyle)

  }

  function changeModal() {
    item.id?setNewText(item.text):setNewText("")
    setIsOpen(!modalIsOpen);
  }

  function updateAndClose(id, text, speed ,css){
    createPhrase(id, text, speed ,css)
    .then(changeModal())
  }

  function createAndClose(text, speed, css){
    createPhrase(text, speed, css)
    changeModal()
  }
  // point of entry within html for Modal.



  Modal.setAppElement("body");

  // returns Modal containing form as well all options button./ sexy terniry operator
  return (
    <div className="modelWrapper">
      {item.css ? optionBtn : addBtn}

      <Modal className="myModal" isOpen={modalIsOpen}>
        <h2 className="customHeader">Customize Your Message</h2>
        <div className="formWrapper">
          <form onSubmit={() => createPhrase(item.id)}>
            <h4 className="inputHeader">Input text</h4>
            <input
              className="inputBox"
              type="text"
              name="phraseInput"
              value={newText}
              onChange={updateText}
            ></input>
            <h4 className="speedHeader">Speed</h4>
            <div className="speedDiv">
              <label className="speedSelect">
                <p>Low</p>
              </label>
                <input
                  className="speedSelect"
                  type="radio"
                  value={2}
                  name="updateSpeed"
                  onChange={updateSpeed}
                  required
                ></input>
              <label className="speedSelect">
                <p>Med</p>
              </label>
                <input
                  className="speedSelect"
                  type="radio"
                  value={5}
                  name="updateSpeed"
                  onChange={updateSpeed}
                  required
                ></input>
              <label className="speedSelect">
                <p>High</p>
              </label>

                <input
                  className="speedSelect"
                  type="radio"
                  value={15}
                  name="updateSpeed"
                  onChange={updateSpeed}
                  required
                ></input>
            </div>


            <h4 className="styleHeader">Style</h4>
            <div className="styleDiv">
              <label className="styleSelect">
                <p>Red</p>
              </label>
                <input
                  className="styleSelect"
                  type="radio"
                  value={"rotated-H1red"}
                  name="updateStyle"
                  onChange={updateStyle}
                  required
                ></input>
              <label className="styleSelect">
                <p>Green</p>
              </label>
                <input
                  className="styleSelect"
                  type="radio"
                  value={"rotated-H1green"}
                  name="updateStyle"
                  onChange={updateStyle}
                  required
                ></input>
              <label className="styleSelect">
                <p>Blue</p>
              </label>

                <input
                  className="styleSelect"
                  type="radio"
                  value={"rotated-H1blue"}
                  name="updateStyle"
                  onChange={updateStyle}
                  required
                ></input>
            </div>
            <br />
          </form>
          {item.id ? (
            <button
              className="submitBtn"
              onClick={() => updateAndClose(item.id, newText, newSpeed, newCss)}
            >
              Update
            </button>
          ) : (
            <button
              className="submitBtn"
              onClick={() => createAndClose(newText, newSpeed, newCss)}
            >
              Submit
            </button>
          )}

          <br />
          {item.css ? (
            <button className="deletebtn" onClick={() => deletePhrase(item.id)}>
              DELETE
            </button>
          ) : null}
          <button className="btn-updateModal" onClick={changeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
