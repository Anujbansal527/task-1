


import React, { useState } from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Nav = () => {


    const [btn,setBtn] = useState("Sign Out")

    const changefun = (e) => {
        let text = e.target.innerText
        
        console.log(text)
    }

  return (
    <div className='nav'>
    <div className='nav-container'>
        <div className='nav-head'>
            <Link id='nav-ele' to="/"><h1 className="head" >BrailnlyLingo</h1></Link>
        </div>
        <div>
            <Link id='nav-ele' to={"#"}>Home</Link>
            <Link id='nav-ele' to={"#"}>Ladderboard</Link>
            <Link id='nav-ele' to={"#"}>Daily Quiz</Link>
            <Link id='nav-ele' to={"#"}>Genre</Link>
        </div>
        <div>
            <Link to={"#"}><button onClick={(e)=>changefun} className='nav-btn'>{btn}</button></Link>
        </div>
    </div>
    </div>
  )
}

export default Nav