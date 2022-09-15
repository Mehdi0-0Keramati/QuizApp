import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
//! components
import ApiContext from "./Components/context/context"
import Home from "./Components/home/Home"
import InfoQuiz from "./Components/infoQuiz/InfoQuiz"
import BoxQuiz from "./Components/boxQuiz/BoxQuiz"
import ResultQuiz from "./Components/resultQuiz/ResultQuiz"
//! components


const App = () => {
  const [questions, setQuestions] = useState([
    {
      numb: 1,
      question: "What is the correct command to create a new React project?",
      answer: "npx create-react-app my-app",
      options: [
        "npx create-react-app my-app",
        "npx create-react-app",
        "npm create-react-app my-app",
        "npx create-react-app ",
      ],
    },
    {
      numb: 2,
      question: "What does myReactApp refer to in the following command?",
      answer: "The name you want to use for the new app",
      options: [
        "the directory to create the new app in",
        "The name you want to use for the new app",
        "a reference to an exiting app ",
        "the type of to create",
      ],
    },
    {
      numb: 3,
      question: "What command is used to start the React local development server?",
      answer: "npm start",
      options: ["npm start", "npm build", "npm run dev", "npm serve"],
    },
    {
      numb: 4,
      question: "What is the default local host port that a React development server uses?",
      answer: "3000",
      options: ["3000", "3500", "8080", "5000"],
    },
    {
      numb: 5,
      question: "A copy of the 'real' DOM that is kept in memory is called what?",
      answer: "Virtual DOM",
      options: ["shadow dom", "reactDOM", "Virtual DOM", "dom"],
    },

    {
      numb: 6,
      question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
      answer: "key",
      options: ["key", "data", "index", "id"],
    },

    {
      numb: 7,
      question: "What tool does React use to compile JSX?",
      answer: "babel",
      options: ["babel", "reactDOM", "JSX Compiler", "react router"],
    },
    {
      numb: 8,
      question: "What is a common use case for ref?",
      answer: "To directly access a DOM node",
      options: [
        "to bind the function",
        "To directly access a DOM node",
        "to refer to a function",
        "to refer to another javascript file",
      ],
    },
  ])
  const [isRunning, setIsRunning] = useState(false);
  const [UserScore, setUserScore] = useState(0);
  return (
    <>
      <ApiContext.Provider
        value={{
          questions: questions,
          setQuestions: setQuestions,
          isRunning: isRunning,
          setIsRunning: setIsRunning,
          UserScore: UserScore,
          setUserScore: setUserScore
        }}>

        <HashRouter>
          <Routes>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/infoQuiz" element={<InfoQuiz />} />
            <Route path="/boxQuiz" element={<BoxQuiz />} />
            <Route path="/resultQuiz" element={<ResultQuiz />} />
          </Routes>
        </HashRouter>

      </ApiContext.Provider>
    </>
  )
}

export default App