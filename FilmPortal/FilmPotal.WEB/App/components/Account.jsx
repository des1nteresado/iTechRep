import React from 'react';
import Comment from './Comment.jsx';

const Account = (props) => {
    let comments = props.user.comments.map(item => {
        return (
            <Comment key={item.commentId} isAccount={true} data={item} user={props.user} deleteComment={props.deleteComment} />
        );
    });

    return (
        <React.Fragment>
            <div className="account">
                <div className="account__header">
                    <p>Hello, {props.user.name}!</p>
                    <button className='account__button' onClick={() => { if (confirm('Вы уверены что хотите выйти?')) props.logout() }}>Logout</button>
                </div>
                <div className="account__comments">
                    <p className="account__commentCount">Your comments: {props.user.comments.length} </p>
                    {comments}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Account;