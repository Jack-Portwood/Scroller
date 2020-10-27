import React ,{useEffect,useState,Fragment} from 'react'
import ScrollScreen from "./ScrollScreen"
import Header from "./Header"
import DeviceOrientation, {Orientation} from 'react-screen-orientation'

//state to go here
//arrayOfPhrases objects
//selectedPhrase

//phraseObject{id:uuid,text:phrase,speed:number,css:css}



const ScrollChoicesComponent = () => {

function updatePhrases(event){
  event.preventDefault()
console.log(phrases[0] +"hiya")

}

const [rotate,setRotate]=useState(false)

const [phrases, setPhrases] = useState([
  { id: 0, text: "this is the first item", speed: 5, css: "placeholder" },
  {
    id: 1,
    text:
      "LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT LOOONG TEEEXT",
    speed: 4,
    css: "placeholder",
  },
  { id: 2, text: "this is the third item", speed: 3, css: "placeholder" },
]);
if (rotate===false){
  return (
    <DeviceOrientation lockOrientation={"portrait"}>
      <Orientation orientation="portrait" alwaysRender={false}>
        <Fragment>
          <Header />
          <ScrollScreen phrases={phrases} updatePhrases={updatePhrases} />
        </Fragment>
      </Orientation>
      <Orientation orientation="landscape" alwaysRender={false}>
        <Fragment>
          <h1>Landscape</h1>
        </Fragment>
      </Orientation>
    </DeviceOrientation>
  );
}

}




export default ScrollChoicesComponent;
