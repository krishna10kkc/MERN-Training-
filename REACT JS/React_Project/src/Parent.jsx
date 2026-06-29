import React from 'react'
import Child from './Child'

const Parent = () => {
    const land = "20 Acres"
    return (
        <div>
        <Child assets={land}/>
        </div>
    )
}

export default Parent