import React, { useEffect, useState } from "react";

interface input {
  question: string;
  answers: Array<string>;
  correctIndex: number;
  activeIndex: number;
  setActiveindex: (arg0: number) => void;
}

function Question({
  question,
  answers,
  correctIndex,
  activeIndex,
  setActiveindex,
}: input) {
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    setCorrect(false);
    setWrong(false);
  }, [activeIndex]);

  function checkCorrect(i: number) {
    if (i == correctIndex) {
      console.log("Correct Answer");
      setCorrect(true);
      setWrong(false);
    } else {
      setCorrect(false);
      setWrong(true);
    }
  }

  return (
    <div>
      <h1>{question}</h1>
      {answers.map((answer, i) => (
        <p onClick={() => checkCorrect(i)}>{answer}</p>
      ))}
      <div>
        {correct ? <p>CORRECT ANSWER!!!</p> : <></>}
        {wrong ? <p>WRONG ANSWER!!!</p> : <></>}
      </div>
      {correct ? (
        <button onClick={() => setActiveindex(activeIndex + 1)}>
          Next question
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Question;
