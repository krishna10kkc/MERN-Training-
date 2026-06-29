import { createContext } from "react";

export const WelcomeContext=createContext()

export const WelcomeProvider=({children})=>{
    const welcome="welcome"
    const showWelcome=()=>{
        alert ('welcome')
    }
    return (
        <WelcomeContext.provider value={{welcome,showWelcome}}> 
            {children}    
        </WelcomeContext.provider>
    )
    
}