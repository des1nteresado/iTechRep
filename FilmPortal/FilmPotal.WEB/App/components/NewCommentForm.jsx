import React from 'react';
import ReactDOM from 'react-dom';

export default class NewCommentForm extends React.Component {

    render() {
        return (
            <div className="writeCommentBlock">
                <div className="commentInput">
                    <textarea className="commentArea" rows="7" value={this.props.comment} onChange={(e) => this.props.changeComment(e.target.value)} />
                    <div className="actionBlock"><input type="button" value="Отправить" onClick={() => this.props.addComment(this.props.user.userId, this.props.comment, this.props.filmId)} /></div>
                </div>
            </div>
        );
    }
};