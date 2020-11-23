import React, { useState, Fragment, useEffect } from "react";
import ScrollScreen from "./ScrollScreen";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import { isCompositeComponent } from "react-dom/test-utils";
import uuid from "react-uuid";

//phraseObject{id:uuid,text:phrase,speed:number,css:css}

const ScrollChoicesComponent = () => {
  // passed to modal to update existing phrases state with amendments.
  async function updatePhrases(id, newText, newSpeed, newCss) {
    const startingPhrases = phrases;
    
    for (let i = 0; i < startingPhrases.length; i++) {
      if (startingPhrases[i].id === id) {
        startingPhrases[i].text = newText;
        console.log(startingPhrases[i].speed)
        startingPhrases[i].speed = newSpeed;
        startingPhrases[i].css = newCss;
      }
    }
    console.log(startingPhrases[1].speed)
    setPhrases(startingPhrases);
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
    console.log("Hello");
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

  // async function myAsyncFunc() {

  //   setTimeout(()=>{const asyncupdatePhrase = phrases
  //   let messedUpPhrases = phrases[0].speed=99
  //     console.log(messedUpPhrases);

  // },3000)

  //   console.log(phrases[0].speed)
  // }

  // function functionToCallAsync(){
  //   myAsyncFunc().then(console.log("Async that ran"));
  // }

  //list of phrases objects.
  const [phrases, setPhrases] = useState([
    {
      id: uuid(),
      text:
        " Hello World, I am still in development view on your mobile device",
      speed: 5,
      css: "placeholder",
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
  let [selectedPhrase, setSelectedPhrase] = useState(phrases[0]);

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
