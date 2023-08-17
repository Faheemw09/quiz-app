import React from 'react'
import Selectfield from '../Components/Selectfield'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import Textfiled from '../Components/Textfiled'
import useAxios from '../Hooks/useAxios'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
    const{response,error,loading}=useAxios({url:"/api_category.php" })
    const navigate=useNavigate()
    if(loading){
    return(
        <Box mt={20}>
            <CircularProgress/>
             </Box>
    )
   }
   if(error){ 
    return(
        <Typography variant ="h6" mt={20} color="royalblue"></Typography>
    )
   }

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/questions")
            }

            const difficultyoptions=[
                {id:"easy" ,name:"Easy"},
                {id:"medium" ,name:"Medium"},
                {id:"hard" ,name:"Hard"},
            ]

            const typeOptions= [
                {id:"multiple" ,name:"Multiple Choice" },
                {id:"boolean" ,name:"True/False" }
            ]
  return (


    <div>
        <form onSubmit={handleSubmit}>
            <Selectfield options={response.trivia_categories} label="Category" /> 
            <Selectfield  options={difficultyoptions} label="Difficulty" /> 
            <Selectfield  options={typeOptions} label="Type" /> 
            <Textfiled/>
            <Box mt={3} width="100%">
<Button fullWidth variant='contained' type='submit' >
    Get Started
</Button>
            </Box>
        </form>
    </div>
  )
}

export default Settings