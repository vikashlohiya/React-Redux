import React from 'react'
import { useDispatch } from 'react-redux'
import { Increment2 } from '../redux/action';
export default function IncrementButtonBy2() {
  
  const dispatch=useDispatch();
  return (
    <div><button style={{backgroundColor:'blue',color:'white'}} value=""  onClick={()=>{dispatch(Increment2())}}>Increment By 2</button></div>
  )
}
