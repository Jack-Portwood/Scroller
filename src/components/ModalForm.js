import React ,{useState} from 'react'
import Ticker from 'react-ticker'
import Modal from 'react-modal';
import {IoIosOptions} from 'react-icons/io'


const ModalForm=({item})=>{
  const [modalIsOpen,setIsOpen] =useState(false);

  function changeModal(){
    setIsOpen(!modalIsOpen)
  }

  return (
    <div className="modelWrapper">

      <IoIosOptions className="options-btn" onClick={changeModal}></IoIosOptions>

      <Modal className="myModal" isOpen={modalIsOpen}>
        <h1>Placeholder for content</h1>
        <h2>{item.text}</h2>
        <button className="btn-updateModal" onClick={changeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default ModalForm;
