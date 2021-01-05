import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className='container'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={props.avatar} />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.author}
                </a>
                <div className='metedata'>
                    <span className='date'>{props.timeAgo}</span>
                </div>
                <div className='text'>
                    <span className='date'>{props.content}</span>
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;
