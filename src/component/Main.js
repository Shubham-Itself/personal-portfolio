import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidenav from './Sidenav'
import HeadContainer from './HeadContainer'

const Main = () => {
  const [height , setHeight] = useState(0)

  useEffect(()=>{
    const header = document.querySelector('.Header')
    console.log(header?.clientHeight)
    setHeight(header?.clientHeight)
  },[height])
 
   
  return (
    <div className="mainWrapper" >
  
    <div className='wrapper'>
     <div className='Header'>
     <div className='head'>
     <Header/>
     </div>
       
     </div>
     <div className='sidenavBody' style={{height:`calc(100vh - ${height-0.5}px)`}}>
       <Sidenav/>
       <HeadContainer/>
     
     </div>
    </div>
  
     </div>
  )
}

export default Main
