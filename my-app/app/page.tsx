"use client";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const [quiz, setQuiz] = useState<Quiz>();
  function fetchData() {
    axios.get("http://localhost:8080/").then(
      (response) => {
        console.log(response.data);
        setQuiz(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    fetchData();
    console.log(quiz);
  }, []);

  return (
    <div>
      {quiz?.Title}
      <br />
      {quiz?.Desc}
    </div>
  );
}
