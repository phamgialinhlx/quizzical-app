import { Box, Typography, Button } from '@mui/material'
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import homeBlob1 from '../assets/homeBlob1.svg'
import homeBlob2 from '../assets/homeBlob2.svg'

const Home = () => {
  useEffect(() => {}, [])

  return (
    <Fragment>
      <Box
        sx={{
          // width: '550px',
          // height: '550px',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          background: '#F5F7FB',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            alignSelf: 'flex-end',
          }}
        >
          <img src={homeBlob2} alt="homeBlob2" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#293264',
              textAlign: 'center',
              fontFamily: 'Karla',
              fontSize: '31.25px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
            }}
          >
            Quzzical
          </Typography>
          <Typography
            sx={{
              paddingTop: '7px',
              paddingBottom: '29px',
              color: '#293264',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            Some description if needed
          </Typography>
          <Button
            component={Link}
            sx={{
              width: '193px',
              height: '52px',
              variant: 'contained',
              borderRadius: '15px',
              backgroundColor: '#4D5B9E',
              color: '#FFFFFF',
              textTransform: 'none',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
            to="/quiz"
          >
            Start Quiz
          </Button>
        </Box>
        <Box
          sx={{
            alignSelf: 'flex-start',
            padding: '0px',
            height: '118px',
          }}
        >
          <img src={homeBlob1} alt="homeBlob1" />
        </Box>
      </Box>
    </Fragment>
  )
}

export default Home
