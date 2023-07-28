import { Fragment, useState, useEffect, createContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Divider, Typography, Button } from '@mui/material'
import Answers from './Answers'
import Solution from './Solution'

export const QuizzesData = createContext()

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([])
  const [correctAnswers, setCorrectAnswers] = useState([])

  const [choices, setChoices] = useState([-1, -1, -1, -1, -1])
  const choicesContextValue = { choices, setChoices }
  const [checkAnswers, setCheckAnswers] = useState(false)

  const calculateScore = () => {
    let score = 0
    for (let i = 0; i < 5; i++) {
      if (choices[i] === correctAnswers[i]) {
        score++
      }
    }
    return score
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://opentdb.com/api.php?amount=5&type=multiple',
      )
      const quiz = await data.json()
      const processedQuiz = []
      const correctIndexes = []
      for (let result of quiz.results) {
        let correct_index = Math.floor(Math.random() * 3)
        let choices = []
        for (let i = 0; i < 4; i++) {
          if (i === correct_index) {
            choices.push(result.correct_answer)
          } else {
            choices.push(result.incorrect_answers.pop())
          }
        }
        processedQuiz.push({
          question: result.question,
          answers: choices,
          correct: correct_index,
        })
        correctIndexes.push(correct_index)
      }
      console.log(processedQuiz)
      setQuizzes(processedQuiz)
      setCorrectAnswers(correctIndexes)
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <QuizzesData.Provider value={{quizzes: quizzes, correctAnswers: correctAnswers, choicesContextValue}}>
        {quizzes.length > 0 ? (
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              background: '#F5F7FB',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: '1000px', left: '75px' }}>
              {quizzes.map((quiz, quizIndex) => (
                <Fragment key={quizIndex}>
                  <Typography
                    sx={{
                      color: '#293264',
                      fontFamily: 'Karla',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal',
                    }}
                    dangerouslySetInnerHTML={{ __html: quiz.question }}
                  />
                  <Box pt={'11.98px'} pb={'14.99px'}>
                    {!checkAnswers ? (
                      <Answers key={quizIndex} quizIndex={quizIndex} />
                    ) : (
                      <Solution key={quizIndex} quizIndex={quizIndex} />
                    )}
                  </Box>
                  <Divider
                    sx={{
                      width: '399px',
                      height: '0.794px',
                      marginBottom: '16px',
                    }}
                  />
                </Fragment>
              ))}
            </Box>
            {!checkAnswers ? (
              <Button
                sx={{
                  width: '120px',
                  height: '35px',
                  variant: 'contained',
                  borderRadius: '12px',
                  backgroundColor: '#4D5B9E',
                  color: '#FFFFFF',
                  textTransform: 'none',
                  fontFamily: 'Inter',
                  fontSize: '10.24px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  alignSelf: 'center',
                }}
                onClick={() => {
                  setCheckAnswers(true)
                }}
              >
                Check answers
              </Button>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: '#293264',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '12.8px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    marginRight: '16px',
                  }}
                >
                  You scored {calculateScore()}/5 correct answers
                </Typography>
                <Button
                  component={Link}
                  to="/"
                  sx={{
                    width: '120px',
                    height: '35px',
                    variant: 'contained',
                    borderRadius: '12px',
                    backgroundColor: '#4D5B9E',
                    color: '#FFFFFF',
                    textTransform: 'none',
                    fontFamily: 'Inter',
                    fontSize: '10.24px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal',
                    alignSelf: 'center',
                  }}
                  onClick={() => {
                    setCheckAnswers(true)
                  }}
                >
                  Play again
                </Button>
              </Box>
            )}
          </Box>
        ) : (
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              background: '#F5F7FB',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#293264',
              fontFamily: 'Karla',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
            }}
          >
            Loading ...
          </Box>
        )}
      </QuizzesData.Provider>
    </Fragment>
  )
}

export default Quiz
