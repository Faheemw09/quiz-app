import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAmountChange, handleScoreChange } from '../redux/Actions'

const Finalscore= () => {
  const {score}=useSelector(state => state)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleback=()=>{
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(50))
navigate("/")
  }
  return (
  <Box mt={10}>
    <Typography variant='h4' fontWeight={"bold"} mb={3} >Final Score {score} </Typography>
    <Button onClick={handleback} variant="outlined">Back To Home</Button>
  </Box>
  )
}

export default Finalscore
