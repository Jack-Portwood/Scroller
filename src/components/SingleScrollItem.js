import React ,{useEffect,useState,Fragment} from 'react'
import Options from "./Options"


const SingleScrollItem=({phrases,updatePhrases})=>{
  console.log(phrases)

  const individualPhrases=phrases.map(item=>{
    return(
      <div className="single-item">
      <form onSubmit={updatePhrases}>
      <input value={item.text} ></input>
      <button type="submit">Save</button>

      </form>
      </div>
    )
  })



  return(
    <Fragment>
    <h2>Hello from the SingleScrollItem component</h2>
    {individualPhrases}
    <Options/>
    </Fragment>
  )
}

export default SingleScrollItem;
