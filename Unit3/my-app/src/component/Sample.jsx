// import React, { Component } from 'react'

//  class Sample extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0,
//         }
//     }

//     componentDidMount(){
//       console.log("Component is mounted")
//     }

//     shouldComponentUpdate(nextProps, nextState){
//         // if(nextState.count === 1){
//         //   return false
//         // }
//         // return true
//         console.log("Component should update")
//         return true
//     }

//     componentDidUpdate(){
//       console.log("Component Did Update")
//     }

//     componentWillUnmount(){
//       console.log("Component Will Unmount")
//     }

//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>This is a sample component</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// export default Sample


import React from 'react'
import { useState } from 'react'
import styles from "./css/Sample.module.css"
import NavStyle from "./css/NavBar.module.css"
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
      <button className={styles.btn}  onClick={increment}>Increment</button>
      <button style={{backgroundColor:"yellow", color:"black", width:"100px", height:"30px"}} onClick={decrement}>decrement</button>
    </div>
  )
}

export default Sample
const Button = styled.button`
    background-color: red;
    color: white;
    width: 100px;
    height: 30px;
    border-radius: 10px;`