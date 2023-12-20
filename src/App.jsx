import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      "id": 4,
      "question": "Who is known as the \"Father of Computer Science\"?",
      "answers": [
        { "text": "Alan Turing", "correct": true },
        { "text": "Charles Babbage", "correct": false },
        { "text": "Ada Lovelace", "correct": false },
        { "text": "John von Neumann", "correct": false }
      ]
    },
    {
      "id": 5,
      "question": "In which year did the Titanic sink?",
      "answers": [
        { "text": "1910", "correct": false },
        { "text": "1912", "correct": true },
        { "text": "1915", "correct": false },
        { "text": "1920", "correct": false }
      ]
    },
    {
      "id": 6,
      "question": "What is the capital city of Australia?",
      "answers": [
        { "text": "Sydney", "correct": false },
        { "text": "Melbourne", "correct": false },
        { "text": "Canberra", "correct": true },
        { "text": "Brisbane", "correct": false }
      ]
    },
    {
      "id": 7,
      "question": "Who wrote the play \"Romeo and Juliet\"?",
      "answers": [
        { "text": "Charles Dickens", "correct": false },
        { "text": "William Shakespeare", "correct": true },
        { "text": "Jane Austen", "correct": false },
        { "text": "Mark Twain", "correct": false }
      ]
    },
    {
      "id": 8,
      "question": "What is the chemical symbol for gold?",
      "answers": [
        { "text": "Au", "correct": true },
        { "text": "Ag", "correct": false },
        { "text": "Fe", "correct": false },
        { "text": "Cu", "correct": false }
      ]
    },
    {
      "id": 9,
      "question": "In which year did World War II end?",
      "answers": [
        { "text": "1943", "correct": false },
        { "text": "1945", "correct": true },
        { "text": "1947", "correct": false },
        { "text": "1950", "correct": false }
      ]
    },
    {
      "id": 10,
      "question": "Who developed the theory of relativity?",
      "answers": [
        { "text": "Isaac Newton", "correct": false },
        { "text": "Albert Einstein", "correct": true },
        { "text": "Stephen Hawking", "correct": false },
        { "text": "Galileo Galilei", "correct": false }
      ]
    },
    {
      "id": 11,
      "question": "What is the largest planet in our solar system?",
      "answers": [
        { "text": "Earth", "correct": false },
        { "text": "Jupiter", "correct": true },
        { "text": "Saturn", "correct": false },
        { "text": "Mars", "correct": false }
      ]
    },
    {
      "id": 12,
      "question": "Which chemical element has the symbol \"O\"?",
      "answers": [
        { "text": "Oxygen", "correct": true },
        { "text": "Osmium", "correct": false },
        { "text": "Uranium", "correct": false },
        { "text": "Iron", "correct": false }
      ]
    },
    {
      "id": 13,
      "question": "Who wrote the famous novel \"To Kill a Mockingbird\"?",
      "answers": [
        { "text": "Harper Lee", "correct": true },
        { "text": "J.K. Rowling", "correct": false },
        { "text": "George Orwell", "correct": false },
        { "text": "Ernest Hemingway", "correct": false }
      ]
    },
    {
      "id": 14,
      "question": "What is the capital of Japan?",
      "answers": [
        { "text": "Beijing", "correct": false },
        { "text": "Seoul", "correct": false },
        { "text": "Tokyo", "correct": true },
        { "text": "Bangkok", "correct": false }
      ]
    },
    {
      "id": 15,
      "question": "Who painted the Mona Lisa?",
      "answers": [
        { "text": "Vincent van Gogh", "correct": false },
        { "text": "Leonardo da Vinci", "correct": true },
        { "text": "Pablo Picasso", "correct": false },
        { "text": "Michelangelo", "correct": false }
      ]
    },
    {
      "id": 16,
      "question": "Which planet is known as the \"Red Planet\"?",
      "answers": [
        { "text": "Mars", "correct": true },
        { "text": "Venus", "correct": false },
        { "text": "Jupiter", "correct": false },
        { "text": "Saturn", "correct": false }
      ]
    }


  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1,000" },
        { id: 2, amount: "₹ 2,000" },
        { id: 3, amount: "₹ 3,000" },
        { id: 4, amount: "₹ 5,000" },
        { id: 5, amount: "₹ 10,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,00,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1 Crore" },
        { id: 16, amount: "₹ 7 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;