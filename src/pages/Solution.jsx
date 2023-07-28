import { Fragment } from 'react'
import { useContext } from 'react'
import { Button } from '@mui/material'
import { QuizzesData } from './Quiz'

const Solution = ({ quizIndex }) => {
  const quizzesData = useContext(QuizzesData)

  const answers = quizzesData.quizzes[quizIndex].answers
  const correctAnswers = quizzesData.correctAnswers
  const choices = quizzesData.choicesContextValue.choices
  const setChoices = quizzesData.choicesContextValue.setChoices

  const style = {
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
  }

  const chooseStyle = (answerIndex) => {
    if (answerIndex === correctAnswers[quizIndex]) {
        return {...style, 
            '&:disabled': {
                backgroundColor: '#94D7A2',
                border: 'none',
            }
        }
    } else if (answerIndex === choices[quizIndex]) {
        return {...style,
            '&:disabled': {
                backgroundColor: '#F8BCBC',
                border: 'none',
            }
        }
    }
    return style
  }

  return (
    <Fragment>
      {answers.map((answer, answerIndex) => (
        <Button
          key={answerIndex}
          variant="outlined"
          disabled={true}
          sx={chooseStyle(answerIndex)}
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

export default Solution
