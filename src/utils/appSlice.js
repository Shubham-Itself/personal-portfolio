import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:'app',
    initialState:{
        isbackgroundInitial: 'rgb(36,41,51)',
        ismenubar: false,
        isColorInitial:'rgb(212,215,220)',
        isSidenavBackground: 'rgb(31,36,45)',
        isCardNameBackground: 'rgb(42,48,60)'
        
        
    },
    reducers:{
        toggleMenu : (state) => {
            state.isbackgroundInitial = 'rgb(210,196,158)';
        },
        toggleColor: (state) =>{
            state.isbackgroundInitial = 'green'
        },
        toggleBar:(state) =>{
            state.ismenubar = !state.ismenubar
        },
        toggleBlue:(state)=>{
            state.isbackgroundInitial = 'blue'
        },
        toggleDark:(state) =>{
            state.isbackgroundInitial = 'rgb(36,41,51)'
        },
        toggleLight:(state) =>{
            state.isbackgroundInitial = 'rgb(242,242,242)'
        },
        toggleColorBlack:(state) =>{
            state.isColorInitial = 'rgb(31,41,55)'
        },
        toggleColorWhiteSidenav:(state) =>{
            state.isSidenavBackground = 'rgb(229,230,230)'
        },
        toggleWhiteCard:(state)=>{
            state.isCardNameBackground = 'rgb(255,255,255)'
        },
        toggleBackToIntialColor:(state)=>{
            state.isColorInitial ='rgb(212,215,220)'
        },
        toggleBackToIntialSidenav:(state)=>{
            state.isSidenavBackground= 'rgb(31,36,45)'
        },
        toggleBackToIntialCard:(state)=>{
            state.isCardNameBackground = 'rgb(42,48,60)'
        },
        toggleColorBackgroundRetro:(state)=>{
            state.isbackgroundInitial = 'rgb(210,196,158)'
        },
        toggleColorSidenavRetro:(state)=>{
            state.isSidenavBackground = 'rgb(198,178,134)'
        },
        toggleCardRetro:(state)=>{
            state.isCardNameBackground = 'rgb(228,215,180)'
        },
       
        toggleColorBackgroundWinter:(state)=>{
            state.isbackgroundInitial = 'rgb(240,245,255)'
        },
        toggleColorSidenavWinter:(state)=>{
            state.isSidenavBackground= 'rgb(226,232,243)'
        },
        toggleCardWinter:(state)=>{
            state.isCardNameBackground = 'rgb(255,255,255)'
        },
        toggleColorBlackWinter:(state)=>{
            state.isColorInitial = 'rgb(57,78,106)'
        },
        toggleColorBackgroundNight:(state)=>{
            state.isbackgroundInitial = 'rgb(14,21,37)'
        },
        toggleColorSidenavNight:(state)=>{
            state.isSidenavBackground= 'rgb(12,18,34)'
        },
        toggleCardNight:(state)=>{
            state.isCardNameBackground = 'rgb(14,23,41)'
        },
        toggleColorBlackNight:(state)=>{
            state.isColorInitial = 'rgb(178,196,239)'
        }

        
    }
})

export const {toggleMenu, toggleColor , toggleBar , toggleBlue, toggleDark , toggleLight , toggleColorBlack, toggleColorWhiteSidenav, toggleWhiteCard , toggleBackToIntialColor, toggleBackToIntialSidenav, toggleBackToIntialCard , toggleColorBackgroundRetro , toggleColorSidenavRetro , toggleCardRetro,toggleCardWinter, toggleColorSidenavWinter,toggleColorBackgroundWinter, toggleColorBlackWinter, toggleCardNight , toggleColorBlackNight,toggleColorSidenavNight,toggleColorBackgroundNight} = appSlice.actions
export default appSlice.reducer