import React ,{ useEffect, useState } from 'react'
import axios from 'axios';
import './Post.css'

const Post = () => {

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then(response => {
            console.log("data in useEffect",response)
            setData(response.data)
        })
    },[])
    console.log("dataa === ",data)
    return (
        <>
        
            {data.map((datas)=>(
                <div className="post-card">
                <h1> {datas.title} </h1>
                <p>{datas.content} </p>
                <span>Author: {datas.author}</span>
                </div>
            ))}
            
        </>
    )
}

export default Post
