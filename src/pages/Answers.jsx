import { Fragment, useEffect } from 'react'
import { useState, useContext } from 'react'
import { Button } from '@mui/material'
import { QuizzesData } from './Quiz'

const Answers = ({ quizIndex }) => {
  //   const [choice, setChoice] = useState(-1)
  const quizzesData = useContext(QuizzesData)
  const answers = quizzesData.quizzes[quizIndex].answers
  const choices = quizzesData.choicesContextValue.choices
  const setChoices = quizzesData.choicesContextValue.setChoices

  useEffect(() => {
    console.log('[Answers]', quizzesData)
  }, []);

  return (
    <Fragment>
      {answers.map((answer, answerIndex) => (
        <Button
          key={answerIndex}
          variant="outlined"
          disabled={choices[quizIndex] === answerIndex}
          sx={{
            // height: '20.65px',
            color: '#293264',
            borderRadius: '7.942px',
            border: '0.794px solid #4D5B9E',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '10.24px',
            textWrap: 'nowrap',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            textTransform: 'none',
            position: 'relative',
            marginRight: '12.71px',
            '&:disabled': {
              borderRadius: '7.71px',
              backgroundColor: '#D6DBF5',
              color: '#293264',
              border: 'none',
            },
          }}
          onClick={() => {
            // setChoices(answerIndex)
            console.log(choices)
            setChoices((prevChoices) => {
              const newChoices = [...prevChoices]
              newChoices[quizIndex] = answerIndex
              return newChoices
            })
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </Button>
      ))}
    </Fragment>
  )
}

export default Answers
