import React from 'react'
import { CircularProgress } from '@mui/material';
const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black">
      <div className="w-20 h-20  flex justify-center items-center">
        <span className="text-[#3CB371] text-4xl animate-spin">{<CircularProgress style= {{color:'#3CB371'}}/>}</span>
      </div>
    </div>
  )
}

export default Loading