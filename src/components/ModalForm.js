import React ,{useState} from 'react'
// import Ticker from 'react-ticker'
import Modal from 'react-modal';
import { IoIosOptions, IoIosAddCircleOutline } from "react-icons/io";
// , IoIosAddCircleOutline may be used later


const ModalForm=({item,createPhrase})=>{

  const [newText,setNewText]=useState(item.text)
  const [newSpeed,setNewSpeed]=useState(item.speed)
  const [modalIsOpen, setIsOpen] = useState(false);

  const optionBtn =  <IoIosOptions className="options-btn" onClick={changeModal}/>
  const addBtn = <IoIosAddCircleOutline className="options-btn" onClick={changeModal}/>

  function onChange(e){
    let myText=e.target.value
    setNewText(myText)
  }

  function updateSpeed(e){
    let mySpeed=e.target.value
    setNewSpeed(mySpeed)
    console.log (e.target.value + " is type of " + typeof(e.target.value))
  }


  function changeModal() {
    setIsOpen(!modalIsOpen);
  }
  // point of entery within html for Modal.
  Modal.setAppElement("body");

  // returns Modal containing form as well all options button./ sexy terniry operator
  return (
    <div className="modelWrapper">
    {item.css ? optionBtn : addBtn}

    <Modal className="myModal" isOpen={modalIsOpen}>
    <h2 className="customHeader">Customize Your Message</h2>
    <div className="formWrapper">
    <form onSubmit={createPhrase}>
    <h4 className="inputHeader">Input text</h4>
    <input
    className="inputBox"
    type="text"
    name="phraseInput"
    value={newText}
    onChange={onChange}
    ></input>
    <h4 className="speedHeader">Speed</h4>
    <div className="speedDiv">
    <label className="speedSelect">
    <p>Low</p>
    </label>
    {item.speed ? (
      <input className="speedSelect" type="radio" value={item.speed} name="updateSpeed"></input>
    ) : (
      <input className="speedSelect" type="radio" value={2} name="updateSpeed" onChange={updateSpeed}></input>
    )}

    <label className="speedSelect">
    <p>Med</p>
    </label>
    {item.speed ? (
      <input className="speedSelect" type="radio" value={item.speed} name="updateSpeed" onChange={updateSpeed}></input>
    ) : (
      <input className="speedSelect" type="radio" value={5} name="updateSpeed" onChange={updateSpeed}></input>
    )}

    <label className="speedSelect">
    <p>High</p>
    </label>
    {item.speed ? (
      <input className="speedSelect" type="radio" value={item.speed} name="updateSpeed"></input>
    ) : (
      <input className="speedSelect" type="radio" value={15} name="updateSpeed"></input>
    )}
    </div>
    <br/>

    <button className="submitBtn">Submit</button>
    </form>
    <button className="btn-updateModal" onClick={changeModal}>
    Close
    </button>
    </div>
    </Modal>
    </div>
  );
}

export default ModalForm;
