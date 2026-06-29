import {useContext} from 'react'
import { WelcomeContext} from '../Context/Welcome'

const seek = () => {
    const {showWelcome}=useContext(WelcomeContext)
    return (
    <div>
        <button onClick={showWelcome}>Welcome</button>
    </div>
    )
}

export default seek
