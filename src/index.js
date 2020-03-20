import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const User = ({ name, skills }) => {
  // const name = props.name
  // const skills = props.skills
  const [score, setScore] = useState(0)
  const handleClick = () => {
    setScore(score + 1)
  }
  return (
    <>
      <h3>{name}</h3>
      <ul>
        <li>特技:{skills}</li>
        <li>好きな食べ物:卵</li>
        <li>嫌いな食べ物:玉ねぎ</li>
      </ul>
      <p>Score:{score}</p>
      <button
        type="button"
        onClick={handleClick}
      >
        加点
      </button>
    </>
  )
}

const App = () => {
  const myElement = <h3>カキクケコ</h3>
  const users = {
    sgr: {
      name: "サガラ",
      skills: "寝る"
    }
  }
  return (
    <>
      <h1>Hello,world!</h1>
      <h2>アイウエオ</h2>
      {myElement}
      <User name={users.sgr.name} skills={users.sgr.skills} />
      <User name={users.sgr.name} skills={users.sgr.skills} />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)