package main

import (
	"net/http"
	cors "github.com/rs/cors/wrapper/gin"

	"github.com/gin-gonic/gin"
)

type quiz struct {
	Title     string
	Desc      string
	Questions []question
}

type question struct {
	Question     string
	Answers      []string
	CorrectIndex int
}

var Quiz = quiz{
	Title: "test",
	Desc:  "yoyoyo, this is description",
	Questions: []question{
		{
			Question:     "What is the scientific name of a butterfly?",
			Answers:      []string{"Apis", "Coleoptera", "Formicidae", "Rhopalocera"},
			CorrectIndex: 3,
		},
		{
			Question:     "How hot is the surface of the sun?",
			Answers:      []string{"1,233 K", "5,778 K", "12,130 K", "101,300 K"},
			CorrectIndex: 1,
		},
		{
			Question: "Who are the actors in The Internship?",
			Answers: []string{
				"Ben Stiller, Jonah Hill",
				"Courteney Cox, Matt LeBlanc",
				"Kaley Cuoco, Jim Parsons",
				"Vince Vaughn, Owen Wilson",
			},
			CorrectIndex: 3,
		},
		{
			Question:     "What is the capital of Spain?",
			Answers:      []string{"Berlin", "Buenos Aires", "Madrid", "San Juan"},
			CorrectIndex: 2,
		},
		{
			Question: "What are the school colors of the University of Texas at Austin?",
			Answers: []string{
				"Black, Red",
				"Blue, Orange",
				"White, Burnt Orange",
				"White, Old gold, Gold",
			},
			CorrectIndex: 2,
		},
		{
			Question:     "What is 70 degrees Fahrenheit in Celsius?",
			Answers:      []string{"18.8889", "20", "21.1111", "158"},
			CorrectIndex: 2,
		},
		{
			Question: "When was Mahatma Gandhi born?",
			Answers: []string{
				"October 2, 1869",
				"December 15, 1872",
				"July 18, 1918",
				"January 15, 1929",
			},
			CorrectIndex: 0,
		},
		{
			Question:     "How far is the moon from Earth?",
			Answers:      []string{"7,918 miles (12,742 km)", "86,881 miles (139,822 km)", "238,400 miles (384,400 km)", "35,980,000 miles (57,910,000 km)"},
			CorrectIndex: 2,
		},
		{
			Question:     "What is 65 times 52?",
			Answers:      []string{"117", "3120", "3380", "3520"},
			CorrectIndex: 2,
		},
		{
			Question: "How tall is Mount Everest?",
			Answers: []string{
				"6,683 ft (2,037 m)",
				"7,918 ft (2,413 m)",
				"19,341 ft (5,895 m)",
				"29,029 ft (8,847 m)",
			},
			CorrectIndex: 3,
		},
		{
			Question:     "When did The Avengers come out?",
			Answers:      []string{"May 2, 2008", "May 4, 2012", "May 3, 2013", "April 4, 2014"},
			CorrectIndex: 1,
		},
		{
			Question:     "What is 48,879 in hexadecimal?",
			Answers:      []string{"0x18C1", "0xBEEF", "0xDEAD", "0x12D591"},
			CorrectIndex: 1,
		},
	},
}

func main() {
	r := gin.Default()
	r.Use(cors.Default())
	r.GET("/", getQuiz)
	r.Run("localhost:8080")
}
func getQuiz(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, Quiz)
}
