
import { useDispatch , useSelector } from "react-redux";
import { toggleBackToIntialCard, toggleBackToIntialColor, toggleBackToIntialSidenav, toggleBar, toggleCardNight, toggleCardRetro, toggleCardWinter,  toggleColorBackgroundNight, toggleColorBackgroundRetro, toggleColorBackgroundWinter, toggleColorBlack, toggleColorBlackNight, toggleColorBlackWinter, toggleColorSidenavNight, toggleColorSidenavRetro, toggleColorSidenavWinter, toggleColorWhiteSidenav, toggleDark, toggleLight,  toggleWhiteCard } from "../utils/appSlice";


const Header = () =>{
    const color = ['Dark' , 'Light' , 'Retro' , 'Winter' , 'Night']
    const dispatch = useDispatch()
   
   
    const handleSecond = () =>{
       
        dispatch(toggleBar());
    }
    const changeColor = (index) =>{
        console.log(index)
        if(index === 0){
            dispatch(toggleDark());
            dispatch(toggleBackToIntialColor());
            dispatch(toggleBackToIntialSidenav());
            dispatch(toggleBackToIntialCard());
        }
        if(index === 1){
            dispatch(toggleLight());
            dispatch(toggleColorBlack());
            dispatch(toggleColorWhiteSidenav());
            dispatch(toggleWhiteCard())
            
        }
        if(index === 2){
            dispatch(toggleColorBackgroundRetro());
            dispatch(toggleColorBlack());
            dispatch(toggleColorSidenavRetro());
            dispatch(toggleCardRetro());
            
        }
        if(index === 3){
            dispatch(toggleColorBackgroundWinter());
            dispatch(toggleColorBlackWinter());
            dispatch(toggleColorSidenavWinter());
            dispatch(toggleCardWinter());
        }
        if(index === 4 ){
            dispatch(toggleColorBackgroundNight());
            dispatch(toggleColorBlackNight());
            dispatch(toggleColorSidenavNight());
            dispatch(toggleCardNight());
        }
    }
    const selector  = useSelector(store => store.app.isbackgroundInitial);
    const colorSelector = useSelector(store => store.app.isColorInitial)
    const openMenu = useSelector(store => store.app.ismenubar);
    const cardSelector = useSelector(store => store.app.isCardNameBackground)
   
   
    if(!selector) return null;
    
    return(
        <div className='headerWrapper' style={{backgroundColor: selector , color: colorSelector}} >
            <p className='name'>Shubham CV</p>
            <div className='pdfArea'>
            <svg style={{fill:colorSelector}}  className="material-symbols-outlined" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
            <svg onClick={()=>handleSecond()} style={{fill:colorSelector}}  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"/></svg>
           {
            openMenu && ( <div className="dropDownForColor" style={{backgroundColor: cardSelector , color: colorSelector}}>
                <ul>
                    {
                        color.map((item, index)=>(
                            <li key={index} onClick={()=> changeColor(index)}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            )
           }
            </div>
         
       

        </div>
    )
}

export default Header;