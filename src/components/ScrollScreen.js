import React, {useState}  from 'react'
import Ticker from 'react-ticker'
import ModalForm from './ModalForm'
import Header from "./Header";
import { IoIosAddCircleOutline } from "react-icons/io";



const ScrollScreen=({phrases, selectedPhrase, rotated, createPhrase, changeModal, usePhrase})=>{

  //state for modal display defualt set to false.
   const [modalIsOpen, setIsOpen] = useState(false);

   //function to set modal using inverted state.
   function changeModal() {
     setIsOpen(!modalIsOpen);
   }

// map function which returns ticker component which displays desired text.
// also returns options button
  const phrase = phrases.map((item) => {
    {console.log(item)}
    return (
      <div key={item.id} className="container">
      <input type="radio" value={item.id} name="displayPhrase" onChange={usePhrase}></input>
        <Ticker speed={item.speed}>
          {() => (
            <>
              <h1 className="ticker-text"> {item.text} </h1>
            </>
          )}
        </Ticker>
        <ModalForm item={item} createPhrase={createPhrase} changeModal={changeModal} modalIsOpen={modalIsOpen} />
      </div>
    );
  });


// returns either horizontal view or portraite view displaying relevent data. 
  if(!rotated){
  return (
    <div className="phrasesWrapper">
      <Header />
      {phrase}
      <div className="add-Btn-Container">
        <IoIosAddCircleOutline
          className="add-btn"
          onClick={changeModal}
          modalIsOpen={modalIsOpen}
          createPhrase={createPhrase}
        ></IoIosAddCircleOutline>
      </div>
    </div>
  );
}
  return (
    <div className="rotated-Div-Wrapper">
      <div className="rotated-Div">
        <Ticker className="full-Screen-Ticker" speed={selectedPhrase.speed *5}>
          {() => (
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
