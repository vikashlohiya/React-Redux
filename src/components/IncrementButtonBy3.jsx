import React from 'react'

import { useDispatch } from 'react-redux'
import { Increment3 } from '../redux/action';
export default function IncrementButtonBy3() {

  const dispatch=useDispatch();

  return (
    <div><button style={{backgroundColor:'blue',color:'white'}} value="" onClick={()=>{dispatch(Increment3())}}>Increment By 3</button></div>
  )
}
