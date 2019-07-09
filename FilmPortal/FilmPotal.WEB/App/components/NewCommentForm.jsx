import React from 'react';

const NewCommentForm = props => {
    return (
        <div className="writeCommentBlock">
            <div className="commentInput">
                <textarea className="commentArea" rows="5" value={props.comment} onChange={(e) => props.changeComment(e.target.value)} />
                <div className="actionBlock"><input type="button" value="Отправить" onClick={() => props.addComment(props.user.userId, props.comment, props.filmId)} /></div>
            </div>
        </div>
    );
};

export default NewCommentForm