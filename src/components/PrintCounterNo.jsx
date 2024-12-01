import React from 'react'
import { useSelector } from 'react-redux'

export default function PrintCounterNo() {
   
  const no=useSelector(state=>state.no);
  return (
    <div>Your No is: {no}
    
    
    </div>
    

  )
}
