
import './App.css';


import Loader from './component/Loader';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Main from './component/Main';





function App() {
  // const selector  = useSelector(store => store.app.isbackgroundInitial);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(()=>{
    const interval = setTimeout(()=>{
      setIsLoading(false);
    },2000)
    return () => clearTimeout(interval)
  }, [isLoading])
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX-12, y: clientY-12 });
    setIsMoving(true);
  };
  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
  ];

  const handleMouseLeave = () => {
    setIsMoving(false);
  };
  
  const arrayLength = 10;
  return (
  <div  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave} > 
 {
  
(
   isMoving &&( <div className='circleContainer'>
    {
      Array.from({length: arrayLength}).map((_, index)=>(
       
        <div key={index} className='circleMove' style={{ top: cursorPosition.y,
            left: cursorPosition.x ,transitionDuration: `${(index)*0.02}s`, transform: `scale(${(arrayLength - index)/arrayLength})`, backgroundColor: colors[index % colors.length]}}>
        </div>
      ))
    }
    </div>
   )
    
  )
  }

    {
      isLoading?<Loader/>:
      <Provider store={appStore}>
      <Main />
      </Provider>
      
    }
  </div>
  );
}




export default App;
