import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { AiFillCar } from 'react-icons/ai';
import { GiSteeringWheel } from 'react-icons/gi';
import { ImSpoonKnife  } from 'react-icons/im';
import { GiWineBottle } from 'react-icons/gi';
import { RiMotorbikeFill } from 'react-icons/ri';
import { GiSuitcase } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';


   

function Help() {
  const Datas = [
    {
      logo: <AiFillCar />,
      title:"Riders",
    },
    {
      logo: <GiSteeringWheel />,
      title:"Driving & Delevering",
    },
    {
      logo: <ImSpoonKnife />,
      title:"Foods",
    },
    {
      logo: <GiWineBottle />,
      title:"Merchants & Services",
    },
    {
      logo: <RiMotorbikeFill />,
      title:"Bikes & Scooters",
    },
    {
      logo: <GiSuitcase />,
      title:"Business",
    },
  ]
  return (
   <>
    <div className='container helpContainer'>
      <div className='row'>
        <h1 className='my-5'>Welcome to <span className='text-success'>Taxi</span> Support</h1>
        <h5>How we can help ?</h5>
        <div className='row my-4'>
          {Datas.map((data,index)=>{
            return(
              <>
              <div className='col'>

              
                   <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        
        
        '& > :not(style)': {
          m: 1,
          width: 140,
          height: 140,
        },
      }}
    >
      <Paper elevation={3} sx={{ p : 1.5 }} >
        <div className='helpLogo my-2'>{data.logo}</div>
        <h5 className='my-2' key={index}>{data.title}</h5>
      </Paper>
    
    </Box>
    </div>
              
              </>
            )
          })}
     

          </div>
       
       
      </div>

    </div>
   </>
  )
}

export default Help