import React ,{Fragment}from "react";
import Ticker from "react-ticker";
import ModalForm from "./ModalForm";
import Header from "./Header";
import { IoIosPhonePortrait} from "react-icons/io";

const ScrollScreen = ({
  phrases,
  selectedPhrase,
  rotated,
  usePhrase,
  createPhrase,
  updatePhrases,
  deletePhrase,
}) => {

  //map over all phrases and generaates a ticker div with scrolling text for each item
  const phrase = phrases.map((item) => {

    return (
      <div key={item.id} className="container">
        <input
          type="radio"
          value={item.id}
          name="displayPhrase"
          onChange={usePhrase}
        ></input>
        <Ticker speed={item.speed}>
          {() => (
            <>
              <h1 className={"ticker-text"+item.css}> {item.text} </h1>
            </>
          )}
        </Ticker>
        <ModalForm
          item={item}
          createPhrase={updatePhrases}
          deletePhrase={deletePhrase}
        />
      </div>
    );
  });

  if (!rotated) {
    return (
      <div className="phrasesWrapper">
        <Header />
        <div className="phoneIconContainer">
        <p>Rotate to view</p><IoIosPhonePortrait className="phoneIcon"/>
        </div>
        {phrase}
        <div className="add-Btn-Container">
          <ModalForm
            className="add-btn"
            createPhrase={createPhrase}
            item={{ text: "Please enter text" }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="horizonatal-Div-Wrapper">
      <div className="horizontal-Div">
        <Ticker className="full-Screen-Ticker" speed={selectedPhrase.speed * 5}>
          {() => (
            <>
              <h1 className={"horizontal-H1"+selectedPhrase.css}>{selectedPhrase.text}</h1>
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
};

export default ScrollScreen;
