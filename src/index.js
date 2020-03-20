import React, { useState } from "react"
import ReactDOM from "react-dom"

const User = ({ name, skills, like, dislike }) => {
  const [score, setScore] = useState(0)
  const handleClick = () => {
    setScore(score + 1)
  }
  return (
    <>
      <h3>{name}</h3>
      <ul>
        <li>特技{skills}</li>
        <li>好きな食べ物{like}</li>
        <li>嫌いな食べ物{dislike}</li>
      </ul>
      <p>score:{score}</p>
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
  const users = {
    sgr: {
      name: "相良",
      skills: "寝る",
      like: "たまご",
      dislike: "玉ねぎ"
    }
  }
  return (
    <>
      <h1>Hello, World!</h1>
      <h2>アイウエオ</h2>
      <User name={users.sgr.name} skills={users.sgr.skills} like={users.sgr.like} dislike={users.sgr.dislike} />
      <User name={users.sgr.name} skills={users.sgr.skills} like={users.sgr.like} dislike={users.sgr.dislike} />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)