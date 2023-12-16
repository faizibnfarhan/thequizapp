import { useEffect, useState } from "react";
import "./App.css"
import Trivia from "./components/Trivia";
import Timer from './components/Timer'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');


  const data = [
    {
      id: 1, 
      question: "What is the capital city of Australia ?",
      answers:[
        {
          text: "Sydney NSW",
          correct: false
        },
        {
          text: "Queensland QLD",
          correct: false
        },
        {
          text: "Canberra ACT",
          correct: true
        },
        {
          text: "Melbourne VIC",
          correct: false
        },  
      ]
    },
    {
      id: 2, 
      question: "Australia is best known for its  ?",
      answers:[
        {
          text: "Beaches",
          correct: true
        },
        {
          text: "Weather",
          correct: false
        },
        {
          text: "Forests",
          correct: false
        },
        {
          text: "Pollution",
          correct: false
        },  
      ]
    },
    {
      id: 3, 
      question: "Who is the Prime Minister of Australia in 2023?",
      answers:[
        {
          text: "James Cook",
          correct: false
        },
        {
          text: "Peter Shams",
          correct: false
        },
        {
          text: "Sam Antonio",
          correct: false
        },
        {
          text: "Anthony Albanese",
          correct: true
        },  
      ]
    },
    {
      id: 4, 
      question: "When Australia Day is celebrated ?",
      answers:[
        {
          text: "26th January",
          correct: true
        },
        {
          text: "30th December",
          correct: false
        },
        {
          text: "20th August",
          correct: false
        },
        {
          text: "21st September",
          correct: false
        },  
      ]
    },
    {
      id: 5, 
      question: "What is the estimated population of Australia ?",
      answers:[
        {
          text: "30 Million",
          correct: false
        },
        {
          text: "44 Million",
          correct: false
        },
        {
          text: "25.69 Million",
          correct: true
        },
        {
          text: "16 Million",
          correct: false
        },  
      ]
    },
    {
      id: 6, 
      question: "What is the capital city of Australia ?",
      answers:[
        {
          text: "Sydney NSW",
          correct: false
        },
        {
          text: "Queensland QLD",
          correct: false
        },
        {
          text: "Canberra ACT",
          correct: true
        },
        {
          text: "Melbourne VIC",
          correct: false
        },  
      ]
    },
    {
      id: 7, 
      question: "Australia is best known for its  ?",
      answers:[
        {
          text: "Beaches",
          correct: true
        },
        {
          text: "Weather",
          correct: false
        },
        {
          text: "Forests",
          correct: false
        },
        {
          text: "Pollution",
          correct: false
        },  
      ]
    },
    {
      id: 8, 
      question: "Who is the Prime Minister of Australia in 2023?",
      answers:[
        {
          text: "James Cook",
          correct: false
        },
        {
          text: "Peter Shams",
          correct: false
        },
        {
          text: "Sam Antonio",
          correct: false
        },
        {
          text: "Anthony Albanese",
          correct: true
        },  
      ]
    },
    {
      id: 9, 
      question: "When Australia Day is celebrated ?",
      answers:[
        {
          text: "26th January",
          correct: true
        },
        {
          text: "30th December",
          correct: false
        },
        {
          text: "20th August",
          correct: false
        },
        {
          text: "21st September",
          correct: false
        },  
      ]
    },
    {
      id: 10, 
      question: "What is the estimated population of Australia ?",
      answers:[
        {
          text: "30 Million",
          correct: false
        },
        {
          text: "44 Million",
          correct: false
        },
        {
          text: "25.69 Million",
          correct: true
        },
        {
          text: "16 Million",
          correct: false
        },  
      ]
    }
  ]

  const moneyPyramid = [
    {
      id: 1, amount: "$10"
    },
    {
      id: 2, amount: "$20"
    },
    {
      id: 3, amount: "$30"
    },
    {
      id: 4, amount: "$40"
    },
    {
      id: 5, amount: "$50"
    },
    {
      id: 6, amount: "$60"
    },
    {
      id: 7, amount: "$70"
    },
    {
      id: 8, amount: "$80"
    },
    {
      id: 9, amount: "$90"
    },
    {
      id: 10, amount: "$100"
    },

  ].reverse()

  function playAgain() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 300);
  }

  useEffect(() => {
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">

      <div className="main">
            {stop ? 
            <div className="earned-section">
              <h2 className="earned"> You earned: {earned}</h2>
              <button className="play-again" onClick={playAgain}>Play again</button>

            </div> : (
               <><div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
          </div><div className="bottom">
              <Trivia data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} />
            </div></>
            )}
        </div>
        <div className="pyramid ">
          <ul className="moneyList">
            {
              moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">
                    {m.id}
                  </span>
                  <span className="moneyListItemAmount">
                    {m.amount}
                  </span>
                </li>
              ))
            }

        
          </ul>
        </div>

    </div>
  );
}

export default App;
