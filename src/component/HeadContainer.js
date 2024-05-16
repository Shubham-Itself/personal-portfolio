import React from 'react'
import Headbody from './Headbody'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';


const HeadContainer = () => {
     const selector  = useSelector(store => store.app.isbackgroundInitial);
  return (
    <div className='headbody' style={{backgroundColor:selector}} >
    <Headbody/>
    <Outlet/>
  </div>
  )
}

export default HeadContainer
