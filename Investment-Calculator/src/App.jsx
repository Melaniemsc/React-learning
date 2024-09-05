import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
})

const inputIsValid = userInput.duration >=1

function handleChange(inputIdentefier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentefier]: + newValue
      }
  })

}

  return <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please enter value greater than zero</p>}
    {inputIsValid && <Results input={userInput} />}
    </>
    
}

export default App
