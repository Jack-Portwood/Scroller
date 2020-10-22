import React ,{useState} from 'react'
import Ticker from 'react-ticker'
import Modal from 'react-modal';


const ModalForm=({item,reverseStatus})=>{
  const [modalIsOpen,setIsOpen] =useState(false);

  function changeModal(){
    setIsOpen(!modalIsOpen)
  }

  return (
    <div className="modelWrapper">
      <button className="btn-updateModal" onClick={changeModal}>
        Settings
      </button>
      <Modal className="myModal" isOpen={modalIsOpen}>
        <button className="btn-updateModal" onClick={changeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default ModalForm;
