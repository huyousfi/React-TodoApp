import { useState } from 'react'

// counter first stage without usestate
const App = () => {
  let num = 0
  const addCounter = () => {
    num += 1
    console.log(num);
  }
  const lessCounter = () => {
    num -= 1
    console.log(num);
  }
  return (
    <>
    <h1> Counter {num}</h1>
    <button onClick={addCounter}>+</button>
    <button onClick={lessCounter}>-</button>
    </>
  )
}

export default App

