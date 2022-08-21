import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';




function Notfound() {
  const navigate = useNavigate();
  return (
    <div className='container my-3'>
      <div className='row mx-5 errorBox'>
        <div clasName="col ">
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1000,
          height: 520,
        },
      }}
    >
      
      <Paper elevation={3}>
        <div className='text-center p-5'>
         <div><img src="https://media.istockphoto.com/vectors/error-404-page-with-a-painter-vector-illustration-vector-id653805002?k=20&m=653805002&s=170667a&w=0&h=FdosqCjMGC3RyimFkfUhOPJtQS9Fi1hfPk1qV8pB4Zw=" alt="" /></div>
        </div>
        <div className='mx-5'><Fab variant="extended" onClick={()=>navigate("/")}>
        <NavigationIcon sx={{ mr: 1 }} />
        Home
      </Fab></div>

      </Paper>
    </Box>
        </div>
      </div>

    </div>
  )
}

export default Notfound