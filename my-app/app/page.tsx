import Image from 'next/image'
import axios from 'axios';

export interface Question {
	question: string;
	answers: string[];
	correctIndex: number;
}

export interface Quiz {
	title: string;
	questions: Question[];
	desc: string;
}

export default function Home() {
  axios.get('http://localhost:8080/')
  .then(response => {
    console.log(response.data);
  }, error => {
    console.log(error);
  });
  return (
    <div>
      <h1>lol</h1>
    </div>
  )
}
