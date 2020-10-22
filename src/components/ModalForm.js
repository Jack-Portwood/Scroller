import React ,{useState} from 'react'
import Ticker from 'react-ticker'
import Modal from 'react-modal';


const ModalForm=({item,reverseStatus})=>{
  const [modalIsOpen,setIsOpen] =useState(false);

  function changeModal(){
    setIsOpen(!modalIsOpen)
  }

  return(
    <div>
    <button onClick={changeModal}>Settings</button>
    <Modal className='myModal' isOpen={modalIsOpen}>
    <p>hello from the modal form </p>
    <button onClick={changeModal}>Close Modal</button>


    </Modal>
    </div>
  )
}

export default ModalForm;
