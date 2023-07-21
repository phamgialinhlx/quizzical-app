import { Fragment } from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'

const Answers = ({ answers, quizIndex, choices, setChoices }) => {
  //   const [choice, setChoice] = useState(-1)

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
