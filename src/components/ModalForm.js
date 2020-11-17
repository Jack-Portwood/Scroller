import React ,{useState} from 'react'
// import Ticker from 'react-ticker'
import Modal from 'react-modal';
import { IoIosOptions} from "react-icons/io";
// , IoIosAddCircleOutline may be used later


const ModalForm=({item,createPhrase,modalIsOpen,changeModal})=>{
 

  Modal.setAppElement("body")

  return (
    <div className="modelWrapper">
      <IoIosOptions
        className="options-btn"
        onClick={changeModal}
      ></IoIosOptions>

      <Modal className="myModal" isOpen={modalIsOpen}>
        <form onSubmit={createPhrase}>
          <input className="inputBox" type="text" name="phraseInput"></input>
          <label>Input Phrase</label>
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
