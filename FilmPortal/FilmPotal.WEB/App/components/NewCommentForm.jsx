import React from 'react';

const NewCommentForm = props => {
    return (
        <div className="newCommentForm">
            <textarea className="newCommentForm__textarea" rows="5" value={props.comment} onChange={(e) => props.changeComment(e.target.value)} />
            <button className="newCommentForm__button" type="submit" onClick={() => props.addComment(props.user.userId, props.comment, props.filmId)}>Send</button>
        </div>
    );
};

export default NewCommentForm