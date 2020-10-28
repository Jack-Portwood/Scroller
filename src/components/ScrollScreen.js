import React ,{useState} from 'react'
import Ticker from 'react-ticker'
import Modal from 'react-modal';
import ModalForm from './ModalForm'
import Header from "./Header";



const ScrollScreen=({phrases, selectedPhrase, rotated})=>{

  const phrase = phrases.map((item) => {
    return (
      <div className="container">
        <Ticker speed={item.speed}>
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

  if(!rotated){
  return <div className="phrasesWrapper">
    <Header/>
    {phrase}
    </div>;
}
  return (
    <div className="rotated-Div-Wrapper">
      <div className="rotated-Div">
        <Ticker className="full-Screen-Ticker" speed={selectedPhrase.speed}>
          {({}) => (
            <>
              <h1 className="rotated-H1">{selectedPhrase.text}</h1>
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
}

export default ScrollScreen;
