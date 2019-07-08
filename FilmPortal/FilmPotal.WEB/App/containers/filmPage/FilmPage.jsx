import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Film from '../../components/Film.jsx';
import Comment from '../../components/Comment.jsx';
import NewCommentForm from '../../components/NewCommentForm.jsx';
import { changeComment, getFilm, addComment, deleteComment } from '../../services/filmService.js'

class FilmPage extends React.Component {
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
        this.props.deleteComment(commentId, this.props.data.film.filmId);
    }

    render() {
        let comments = this.props.data.film.comments.map(item => {
            return (
                <Comment key={item.commentId} data={item} user={this.props.user} deleteComment={this.deleteComment} getFilm={this.getFilm} />
            );
        });

        let isLogged = this.props.user.isLogged;

        return (
            <div id="post">
                <Film data={this.props.data.film} isLogged={this.props.user.isLogged} isFull={true} />
                <h3>Комментарии <span className="itemCount">{this.props.data.film.comments.length}</span></h3>
                <div className="commentsList">
                    {comments}
                </div>
                <h3>Написать комментарий</h3>
                {
                    isLogged ? <NewCommentForm
                        user={this.props.user}
                        comment={this.props.data.comment}
                        changeComment={this.props.changeComment}
                        filmId={this.props.data.film.filmId}
                        addComment={this.props.addComment} />
                        : <div>
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                Войдите
                            </Link> чтобы оставить комментарий.</div>
                }

            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        data: state.film,
        user: state.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeComment: bindActionCreators(changeComment, dispatch),
        getFilm: bindActionCreators(getFilm, dispatch),
        addComment: bindActionCreators(addComment, dispatch),
        deleteComment: bindActionCreators(deleteComment, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage) 