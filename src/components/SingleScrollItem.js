import React ,{useEffect,useState,Fragment} from 'react'
import Options from "./Options"


const SingleScrollItem=({phrases})=>{
  const newphrases=phrases

  return(
    <Fragment>
    <h2>Hello from the SingleScrollItem component</h2>
    {newphrases}
    <Options/>
    </Fragment>
  )
}

export default SingleScrollItem;
