import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleCategoryChange, handleDifficultyChange, handletypechange } from '../redux/Actions'

const Selectfield = (props) => {
    const{label,options}=props
    const dispatch=useDispatch()
    const[value,setValue]=useState("")
    const handleChange=(e)=>{
setValue(e.target.value)
switch(label){
    case "Category":
        dispatch(handleCategoryChange(e.target.value))
        break
        case "Difficulty":
            dispatch(handleDifficultyChange(e.target.value))
            break
            case "Type":
                dispatch(handletypechange(e.target.value))
                break
                default:
                    return
}
    }
  return (
    <div>
<Box mt={3} width={"100%"}> 
<FormControl size="small" fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select  required={true} value={value} label={label} onChange={handleChange}>

       {
        options.map(({id,name})=>(
            <MenuItem value={id} key={id}>{name}</MenuItem>
        ))
       }
    </Select>
</FormControl>
</Box>

    </div>
  )
}

export default Selectfield