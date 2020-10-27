import React ,{useState} from 'react'
import Ticker from 'react-ticker'
import Modal from 'react-modal';
import ModalForm from './ModalForm'



const ScrollScreen=({phrases, selectedPhrase, rotated})=>{
  console.log(rotated);

  const phrase = phrases.map((item) => {
    return (
      <div className="container">
        <Ticker className="ticker" speed={item.speed}>
          {({}) => (
            <>
              <h1 className="ticker-text"> {item.text} </h1>
            </>
          )}
        </Ticker>
        <ModalForm item={item} />
      </div>
    );
  });
  if(rotated){
  return [phrase];
}
  return (
    <div className="rotatedDiv">
      <Ticker className="fullScreenTicker" speed={selectedPhrase.speed}>
        {({}) => (
          <>
            <h1 className="rotatedH1">{selectedPhrase.text}</h1>
          </>
        )}
      </Ticker>
    </div>
  );
}

export default ScrollScreen;
