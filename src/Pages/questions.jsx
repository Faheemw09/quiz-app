import { Box, Button, CircularProgress, Typography, } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '../Hooks/useAxios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from '../redux/Actions'
import {decode} from 'html-entities'
const getRendom=(max)=>{
    return  Math.floor(Math.random()*Math.floor(max))
    
}
 const Questions = () => {
  const disptach=useDispatch()
   const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score
   }=useSelector(state=>state)
   const navigate=useNavigate()
   let apiurl=`/api.php?amount=${amount_of_question}`
   if(question_category){
    apiurl=apiurl.concat(`&category=${question_category}`)
   }
   if(question_difficulty){
    apiurl=apiurl.concat(`&difficulty=${question_difficulty}`)
   }
   if(question_type){
    apiurl=apiurl.concat(`&type=${question_type}`)
   }
   
   const{response,loading}=useAxios({url:apiurl})
   const [questionI,setQuestion]=useState(0)
   const[option,setOption]=useState([])
   useEffect(()=>{
if(response?.results.length){
const question=response.results[questionI]
let ans=[...question.incorrect_answers]
ans.splice(
    getRendom(question.incorrect_answers.length),
0,
question.correct_answer
)
setOption(ans)
}
   },[response,questionI])
   const handleClickAns=(e)=>{
    const question=response.results[questionI]
    if(e.target.textContent===question.correct_answer){
        disptach(handleScoreChange(score+1))
    }
    if(questionI + 1 <response.results.length){
        setQuestion(questionI + 1 )
    }else{
          navigate("/score") 
    }
   }

   if(loading){
    return(
        <Box mt={20}> <CircularProgress/></Box>
    )
   }
   const handle=()=>{
navigate("/")
   }
  return (                                  


<Box> 
    <Typography variant="h4">Question {questionI + 1}</Typography>
    <Typography mt={5}>{decode(response.results[questionI].question)}</Typography>
   {option.map((data,id)=>(
      <Box mt={2} key={id}>
      <Button onClick={handleClickAns} variant='contained'>{decode(data)}</Button>
          </Box> 
   ))}
 <Box mt={5}  >
      <span>Score:&nbsp;&nbsp;{score} / {response.results.length}</span>
      <p onClick={handle}>Cancel</p>
    </Box>
</Box>
  )
}
export default Questions