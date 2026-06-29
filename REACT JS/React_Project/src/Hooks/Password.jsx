import  { useState } from 'react'

const Password = () => {
    const[showPassword , setShowPassword]=useState(false)
    const[inputpassword , setInputPassword]=useState("")

    const[liked ,setLiked]=useState(false)

    const likes =()=>{
        setLiked(!liked)
    }
    return (
    <div>
        <input type={showPassword?"text":"password"} name="" id="" value={inputpassword} onChange={(e)=>setInputPassword(e.target.value)} />
        <button onClick={()=>setShowPassword((ggg)=>!ggg)}>{showPassword?"Hide":"Show"}</button>
        <p>Likes: {liked?1:0}</p>
        <button onDoubleClick={likes}>{liked?"Remove Like":"Give Like"}</button>
    </div>
    )
}

export default Password