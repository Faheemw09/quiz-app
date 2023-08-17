import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Settings from './Pages/Settings';
import {Box, Container, Typography} from "@mui/material"
import Finalscore from './Pages/Finalscore';
import Questions from './Pages/questions';
import useAxios from './Hooks/useAxios';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
function App() { 
 
  return (
    <div className="App">
      <BrowserRouter>
      <Container maxWidth="sm"> 
        <Box textAlign={"center"} mt={5}>
        <Typography variant='h2' fontWeight={"bold"}>Quiz App </Typography>
    <Routes>

      <Route path='/' element={ <Settings/>}/>
      
        <Route path='/questions' element={<Questions/>}/>
<Route path='/score' element={<Finalscore/>}/>
      
    </Routes>
<hr style={{marginTop:"20px"}}/>
<Box maxWidth="sm">
      <div
        style={{
          marginTop: "0px",
          marginLeft: "2px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          Created by Faheem
        </div>
        <div>Follow me:</div>
        <div style={{ display: "flex", gap: "15px" }}>
          <a
            href="https://www.linkedin.com/in/faheem-hamid-529403160/"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Faheemw09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://twitter.com/Faheemw09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </Box>
    </Box>
    
    </Container>
     </BrowserRouter>
    </div>
  );
}

export default App;
