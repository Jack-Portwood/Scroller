import React, { useState, Fragment, useEffect } from "react";
import ScrollScreen from "./ScrollScreen";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import uuid from "react-uuid";

const ScrollChoicesComponent = () => {
  // passed to modal to update existing phrases state with amendments.
  async function updatePhrases(id, newText, newSpeed, newCss) {
    const startingPhrases = phrases;

    for (let i = 0; i < startingPhrases.length; i++) {
      if (startingPhrases[i].id === id) {
        startingPhrases[i].text = newText;
        startingPhrases[i].speed = newSpeed;
        startingPhrases[i].css = newCss;
      }
    }
    setPhrases([...startingPhrases]);
  }

  // passed to modal to create new phrases and to push into phrases state.
  function createPhrase(text, speed, css = "css of sorts") {
    const spacialString = " " + text;
    const newPhrase = {
      id: uuid(),
      text: spacialString,
      speed: speed,
      css: css,
    };
    setPhrases([...phrases, newPhrase]);
  }

  function deletePhrase(id) {
    setPhrases(phrases.filter((phrase) => phrase.id !== id));
  }

  //sets selected phrase to be displayed on rotation
  function usePhrase(event) {
    event.preventDefault();
    let newValue = event.target.value;
    for (let i = 0; i < phrases.length; i++) {
      if (phrases[i].id === newValue) {
        setSelectedPhrase(phrases[i]);
      }
    }
  }

  //list of phrases objects. phraseObject{id:uuid,text:phrase,speed:number,css:css}
  const [phrases, setPhrases] = useState([
    {
      id: uuid(),
      text:
        " Hello World, I am still in development view on your mobile device",
      speed: 5,
      css: "rotated-H1red",
    },
  ]);

  const LOCAL_STORAGE_KEY = "phrasesStore";

  useEffect(() => {
    const phrasesFetch = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (phrasesFetch) {
      setPhrases(phrasesFetch);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(phrases));
  }, [phrases]);

  // state for selected phrase to be passed into rotated component.
  let [selectedPhrase, setSelectedPhrase] = useState({
    id: uuid(),
    text:
      " Welcome to Scroller ",
    speed: 5,
    css: "rotated-H1red",
  },);

  //imported orientation component return view of horizontal screen
  //and view portrait screen.
  return (
    <DeviceOrientation lockOrientation={"portrait"}>
      <Orientation orientation="portrait" alwaysRender={false}>
        <Fragment>
          <ScrollScreen
            phrases={phrases}
            updatePhrases={updatePhrases}
            deletePhrase={deletePhrase}
            rotated={false}
            createPhrase={createPhrase}
            usePhrase={usePhrase}
          />
        </Fragment>
      </Orientation>

      <Orientation orientation="landscape" alwaysRender={false}>
        <Fragment>
          <ScrollScreen
            phrases={phrases}
            selectedPhrase={selectedPhrase}
            rotated={true}
          />
        </Fragment>
      </Orientation>
    </DeviceOrientation>
  );
};

export default ScrollChoicesComponent;
