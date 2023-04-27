import React, { useEffect } from 'react';
import user from './Images/ununun.png'

const SeeComent = ({comments, getComments}) => {
    useEffect(()=>{getComments()},[])
  return (
    <div className='container'>
        <h2 className='title'>Comments</h2>
        <div className='bigCommentBlock'>
        {comments.map((item,index)=>(
            <div className='commentCard' key={index}><div><img className='commentImg' src={user}/></div> {item.comment}</div>
        ))
        }
        </div>
    </div>
  )
}

export default SeeComent