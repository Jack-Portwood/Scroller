import React ,{useState} from 'react'
import Ticker from 'react-ticker'
import Modal from 'react-modal';
import ModalForm from './ModalForm'



const ScrollScreen=({phrases})=>{

  function reverseStatus(){
    console.log("hello status")
  }

  const phrase = phrases.map(item =>{

    return (
      <div className="container">
          <Ticker className="ticker" speed={item.speed}>
            {({}) => (
              <>
                <h1 style={{ color: "red" }}> {item.text} </h1>
              </>
            )}
          </Ticker>
        <ModalForm item={item} reverseStatus={reverseStatus} />
      </div>
    );
  } )

  return(
    [phrase]
  )

}

export default ScrollScreen;
