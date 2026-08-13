import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Fruit(props) {
  return(
    <li>There is a {props.name}</li>
  )
}

function Fruitsarea() {
  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        <Fruit name="apple" />
        <Fruit name="banana" />
      </ul>
    </div>
  )
}

function CounterArea() {
  const [buttoncount,setbuttoncount] = useState(0)

  function handlebuttonclick() {
    setbuttoncount(click => click + 1)
  }

  return (
    <div>
      <h2>Button Counter</h2>
      <button onClick={handlebuttonclick}>Press Button</button>
      <p>The button has been pressed {buttoncount} times</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>The Page in React</h1>
      <Fruitsarea />
      <CounterArea />
    </>
  )
}

export default App
