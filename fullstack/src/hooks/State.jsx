import { useState } from "react"

const State = () => {
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1)
    }
    const [likes,setLikes]=useState(0)
    const handleLike=()=>{
        setLikes(likes+1)

    }
    const[like,setLike]=useState(0)
    const[dislike,setDislike]=useState(0)
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button><br />
        <h1>Like and Dislike count</h1>
        <button onClick={()=>setLike(like+1)}>👍{like}</button>
        <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
        
        <h1>Like:{likes}</h1>
        <button onClick={()=>setLikes(likes+10)}>Share📤</button>
    </div>
  )
}

export default State