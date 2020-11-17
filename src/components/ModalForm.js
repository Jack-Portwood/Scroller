import React ,{useState} from 'react'
// import Ticker from 'react-ticker'
import Modal from 'react-modal';
import { IoIosOptions, IoIosAddCircleOutline } from "react-icons/io";
// , IoIosAddCircleOutline may be used later


const ModalForm=({item,createPhrase})=>{

const optionBtn =  <IoIosOptions className="options-btn" onClick={changeModal}/>
const addBtn = <IoIosAddCircleOutline className="options-btn" onClick={changeModal}/>




  const [modalIsOpen, setIsOpen] = useState(false);

  function changeModal() {
    setIsOpen(!modalIsOpen);
  }
  // point of entery within html for Modal.
  Modal.setAppElement("body");
  
  // returns Modal containing form as well all options button./ sexy terniry operator 
  return (
    <div className="modelWrapper">
      {item.css ? optionBtn : addBtn}

      <Modal className="myModal" isOpen={modalIsOpen}>
        <form onSubmit={createPhrase}>
          <label>Input Phrase: </label>
          <input
            className="inputBox"
            type="text"
            name="phraseInput"
            value={item.text}
          ></input>
          <label>
            <p>Low Speed</p>
          </label>
          {item.speed ? (
            <input type="radio" value={item.speed} name="updateSpeed"></input>
          ) : (
            <input type="radio" value={2} name="updateSpeed"></input>
          )}

          <label>
            <p>Medium Speed</p>
          </label>
          {item.speed ? (
            <input type="radio" value={item.speed} name="updateSpeed"></input>
          ) : (
            <input type="radio" value={5} name="updateSpeed"></input>
          )}

          <label>
            <p>High Speed</p>
          </label>
          {item.speed ? (
            <input type="radio" value={item.speed} name="updateSpeed"></input>
          ) : (
            <input type="radio" value={15} name="updateSpeed"></input>
          )}

          <button>Submit</button>
        </form>
        <button className="btn-updateModal" onClick={changeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default ModalForm;
