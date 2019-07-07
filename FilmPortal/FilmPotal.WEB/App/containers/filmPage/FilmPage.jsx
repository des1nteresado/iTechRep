import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Film from '../../components/Film.jsx';
import Comment from '../../components/Comment.jsx';
import NewCommentForm from '../../components/newCommentForm.jsx';
import { changeComment, getPost, addComment, deleteComment } from './Actions.jsx'

class Comments extends React.Component {
    constructor(props) {
		super(props);
		this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount() {
        const parsed = queryString.parse(location.search);
        if (parsed) {
            this.props.getFilm(parsed['filmId']);
        }
	}

	deleteComment(commentId) {
		this.props.deleteComment(commentId, this.props.data.post.postId);
	}

	deletePost(postId) {
		this.props.deletePost(postId, this.props.history);
	}

    render() {
        let comments = this.props.data.post.comments.map(item => {
            return (
				<Comment key={item.commentId} data={item} isLogged={this.props.isLogged} deleteComment={this.deleteComment} />
            );
        });

        return (
            <div id="post">
				<Post data={this.props.data.post} isLogged={this.props.isLogged} deletePost={this.deletePost} isFull={true} />
                <h3>Комментарии <span className="itemCount">{this.props.data.post.comments.length}</span></h3>
                <div className="commentsList">
                    {comments}
                </div>
                <h3>Написать комментарий</h3>
                <NewCommentForm
                    author={this.props.data.author}
                    comment={this.props.data.comment}
                    changeAuthor={this.props.changeAuthor}
                    changeComment={this.props.changeComment}
                    postId={this.props.data.post.postId}
                    addComment={this.props.addComment} />
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
		data: state.comments,
		isLogged: state.header.isLogged
    }
}

let mapDispatch = (dispatch) => {
    return {
        changeAuthor: bindActionCreators(changeAuthor, dispatch),
        changeComment: bindActionCreators(changeComment, dispatch),
        getPost: bindActionCreators(getPost, dispatch),
		addComment: bindActionCreators(addComment, dispatch),
		deletePost: bindActionCreators(deletePost, dispatch),
		deleteComment: bindActionCreators(deleteComment, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(Comments) 