"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Question from "./components/Question";

export interface Question {
  Question: string;
  Answers: string[];
  CorrectIndex: number;
}

export interface Quiz {
  Title: string;
  Desc: string;
  Questions: Question[];
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState<Quiz>();

  function fetchData() {
    axios.get("http://localhost:8080/").then(
      (response) => {
        console.log(response.data);
        setQuiz(response.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!quiz) return <p>No profile data</p>;

  return (
    <div>
      {quiz?.Title}
      <br />
      {quiz?.Desc}
      <h2>
        {activeIndex} / {quiz.Questions.length}
      </h2>
      {complete ? (
        <h1>You are finished!!!</h1>
      ) : (
        <Question
          question={quiz.Questions[activeIndex].Question}
          answers={quiz.Questions[activeIndex].Answers}
          correctIndex={quiz.Questions[activeIndex].CorrectIndex}
          activeIndex={activeIndex}
          setActiveindex={setActiveIndex}
        />
      )}
    </div>
  );
}
