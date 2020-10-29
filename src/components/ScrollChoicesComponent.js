import React ,{useState,Fragment} from 'react'
import ScrollScreen from "./ScrollScreen"
import DeviceOrientation, {Orientation} from 'react-screen-orientation'
import { isCompositeComponent } from 'react-dom/test-utils';

//state to go here
//arrayOfPhrases objects
//selectedPhrase

//phraseObject{id:uuid,text:phrase,speed:number,css:css}



const ScrollChoicesComponent = () => {

function updatePhrases(event) {
  event.preventDefault();
  console.log(phrases[0] + "hiya");
}

function createPhrase(event) {
  event.preventDefault();
  console.log("Hello");
}


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

let [selectedPhrase, setSelectedPhrase] = useState(phrases[1]);

function usePhrase(event) {
  event.preventDefault();
  let newValue = parseInt(event.target.value)
  for (let i = 0; i < phrases.length; i++){
      if(phrases[i].id === newValue) {
        setSelectedPhrase(phrases[i])
      }
    }
       
    

      
      
      
    
  
  
  // console.log(event.target.value[0]);
  // setSelectedPhrase(event.target.value);
}



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
