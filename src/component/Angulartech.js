import { useSelector } from "react-redux";

const Angulartech = () =>{
    const colorSelector = useSelector(store => store.app.isColorInitial);
    const bgSelector = useSelector(store => store.app.isSidenavBackground);
    const selector  = useSelector(store => store.app.isbackgroundInitial);
    
    return(
        <div className="coreTechonoly AngularTechonology">
        <div className="upperSection" style={{backgroundColor:bgSelector}}>
            <div className="dot orange"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
        </div>
            <div className="lowerSection p-10">
            <div className="coretitle angularTitle d-flex" style={{color:colorSelector}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>
                Angular 
            </div>
             <div className="techDetails d-flex">
             
               <div className="firstContainer">
               <div  className="partone d-flex">
                <div title="Angular">
                <svg style={{fill: colorSelector}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>
                </div>
                <div title="TypeScript">
                <svg style={{fill:colorSelector}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="2500" height="2500"><path className="st0" d="M0 200V0h400v400H0"/><path style={{fill:selector}} className="st1" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"/></svg>
                </div>
                <div title="Block Element Modifier (BEM)">
                <svg style={{fill: colorSelector}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M260.4 254.9 131.5 33.1a2.2 2.2 0 0 0 -3.8 0L.3 254.9A2.2 2.2 0 0 0 .3 257.1L129.1 478.9a2.2 2.2 0 0 0 3.8 0L260.4 257.1A2.2 2.2 0 0 0 260.4 254.9zm39.1-25.7a2.2 2.2 0 0 0 1.9 1.1h66.5a2.2 2.2 0 0 0 1.9-3.3L259.1 33.1a2.2 2.2 0 0 0 -1.9-1.1H190.7a2.2 2.2 0 0 0 -1.9 3.3zM511.7 254.9 384.9 33.1A2.2 2.2 0 0 0 383 32h-66.6a2.2 2.2 0 0 0 -1.9 3.3L440.7 256 314.5 476.7a2.2 2.2 0 0 0 1.9 3.3h66.6a2.2 2.2 0 0 0 1.9-1.1L511.7 257.1A2.2 2.2 0 0 0 511.7 254.9zM366 284.9H299.5a2.2 2.2 0 0 0 -1.9 1.1l-108.8 190.6a2.2 2.2 0 0 0 1.9 3.3h66.5a2.2 2.2 0 0 0 1.9-1.1l108.8-190.6A2.2 2.2 0 0 0 366 284.9z"/></svg>
                </div>
               
                </div>
                <div className="progressWrapper">
                <p className="progressNumber" style={{backgroundColor:colorSelector}}>90</p>
                <div className="progressBar">
                
                    <div className="insider"></div>
                </div>
                </div>
               
               </div>
              

             </div>
            </div>
        </div>
    )
}
export default Angulartech;