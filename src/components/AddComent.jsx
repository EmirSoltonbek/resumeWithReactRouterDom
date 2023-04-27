import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddComent = ({addComments}) => {
    const [comment, setComment]= useState('');
    const handleValues=()=>{
        let newComment = {
            comment:comment,
        }
        addComments(newComment);
        setComment('');
    }
  return (
    <div className='container'>
        <h2 className='title'>Add Comment</h2>
        <footer>
    <textarea placeholder="write your comment" cols="100" rows="15" onChange={(e)=>setComment(e.target.value)}></textarea>
    <Link to='/seecomment'><button onClick={handleValues} className="footer-button">SEND COMMENT</button></Link>
</footer>
    </div>
  )
}

export default AddComent