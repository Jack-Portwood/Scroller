import React ,{useState,Fragment} from 'react'
import ScrollScreen from "./ScrollScreen"
import DeviceOrientation, {Orientation} from 'react-screen-orientation'
import { isCompositeComponent } from 'react-dom/test-utils';



//phraseObject{id:uuid,text:phrase,speed:number,css:css}



const ScrollChoicesComponent = () => {

// passed to modal to update existing phrases state with amendments.
function updatePhrases(event) {
  event.preventDefault();
  console.log("hiya");
}

// passed to modal to create new phrases and to push into phrases state.
function createPhrase(event) {
  event.preventDefault();
  const newPhrase={id:7,text: event.target.phraseInput.value, speed:event.target.updateSpeed.value, css: "placeholder"}
  setPhrases([...phrases,newPhrase])
  console.log("Hello");
}


function deletePhrases(event) {
  event.preventDefault();

}

//list of phrases objects.
const [phrases, setPhrases] = useState([
  { id: 0, text: "this is the first item", speed: 2, css: "placeholder" },
  {
    id: 1,
    text:
      " Hello World, I am still in development view on your mobile device",
    speed: 5,
    css: "placeholder",
  },
  { id: 2, text: "this is the third item", speed: 15, css: "placeholder" },
]);

// state for selected phrase to be passed into rotated component.
let [selectedPhrase, setSelectedPhrase] = useState(phrases[1]);

//function to iterate through phrases to return phrases with matching key and set
//state of selected phrase
function usePhrase(event) {
  event.preventDefault();
  let newValue = parseInt(event.target.value)
  for (let i = 0; i < phrases.length; i++){
      if(phrases[i].id === newValue) {
        setSelectedPhrase(phrases[i])
      }
    }
}
//imported orientation component return view of horizontal screen
//and view portrait screen.
  return (
    <DeviceOrientation lockOrientation={"portrait"}>
      <Orientation orientation="portrait" alwaysRender={false}>
        <Fragment>
          <ScrollScreen
            phrases={phrases}
            updatePhrases={updatePhrases}
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
}


export default ScrollChoicesComponent;
