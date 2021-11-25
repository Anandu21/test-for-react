import React, { Component,useContext } from 'react'
import { useHistory } from 'react-router-dom'

import './Post.css'


    function Post ()    {
        const history = useHistory ()
        return (
            <div className="postOne">
                <h2>Our Customer</h2>

                <button onClick={()=>{
                 history.push ('/view')
                }}
                className="btn1">AD BUTTON</button>
                
            </div>
        )
    }


export default Post
