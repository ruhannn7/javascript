import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

function Sample() {
  // let count=0
  const [count, setCount]=useState(0)
  
  const increment = () => {
       setCount(count + 1)
    }

    const decrement = () => {
       setCount(count - 1)
    }
  return (
    <div>
      <h1>This is a sample component</h1>
      <h2>{count}</h2>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  )
}

export default Sample

const Button = styled.button`
  background-color: red;
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`