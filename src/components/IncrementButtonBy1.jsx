import React from 'react'
import { useDispatch } from 'react-redux'
import { Increment1 } from '../redux/action';

export default function IncrementButtonBy1() {
  const dispatch=useDispatch();

  
  return (
    <div><button style={{backgroundColor:'blue',color:'white'}} value="" onClick={()=>{dispatch(Increment1())}} >Increment By 1</button></div>
  )
}
