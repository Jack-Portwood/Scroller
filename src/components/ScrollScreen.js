import React  from 'react'
import Ticker from 'react-ticker'



const ScrollScreen=({phrases})=>{

  const phrase = phrases.map(item =>{

    return (
  <Ticker>
    {({}) => (
      <>
        <h1> {item.text} </h1>
      </>
    )}
  </Ticker>
);
  } ) 

  return(
    [phrase]
  )
  
}

export default ScrollScreen;
