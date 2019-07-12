import React from 'react';
import Comment from './Comment.jsx';

export default class Account extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.user.userId);
    }

    render() {
        let comments = this.props.user.comments.map(item => {
            return (
                <Comment key={item.commentId} data={item} user={this.props.user} deleteComment={this.props.deleteComment}  />
            );
        });
        return (
            <React.Fragment>
                <div className="account">
                    <div className="account__header">
                        <p>Hello, {this.props.user.name}!</p>
                        <button className='account__button' onClick={() => { if (confirm('Вы уверены что хотите выйти?')) this.props.logout() }}>Logout</button>
                    </div>
                    <div className="account__comments">
                        <p className="account__commentCount">Your comments: {this.props.user.comments.length} </p>
                        {comments}
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
