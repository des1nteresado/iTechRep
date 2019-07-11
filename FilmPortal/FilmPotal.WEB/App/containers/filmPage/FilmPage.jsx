import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Film from '../../components/Film.jsx';
import Comment from '../../components/Comment.jsx';
import NewCommentForm from '../../components/NewCommentForm.jsx';
import { changeComment, getFilm, addComment, deleteComment, modifyRating, getMark } from '../../services/filmService.js'
import Carousel from 'react-images';

class FilmPage extends React.Component {
    componentDidMount() {
        const parsed = queryString.parse(location.search);

        if (parsed) {
            this.props.getFilm(parsed['filmId']);
            if (this.props.user.isLogged)
                this.props.getMark(this.props.user.userId, parsed['filmId']);
        }
    }

    render() {
        let comments = this.props.data.film.comments.map(item => {
            return (
                <Comment key={item.commentId} data={item} user={this.props.user} deleteComment={this.props.deleteComment} />
            );
        });

        let images = this.props.data.film.images.map(image => {
            return (
                { src: image.path }
            );
        });

        let gallery = images.length ? <Carousel views={images} /> : null
        let isLogged = this.props.user.isLogged;

        return (
            <div className="page">
                <div className="page__info">
                    <Film data={this.props.data.film} rating={this.props.data.rating} modifyRating={this.props.modifyRating} user={this.props.user} isLogged={this.props.user.isLogged} isFull={true} />
                </div>
                <div className='page__images'>
                    {gallery}
                </div>
                <div className="page__comments">
                    <p className="page__commentCount">Comments: {this.props.data.film.commentCount} </p>
                    {comments}
                    <p className="page__newComment">Leave a comment</p>
                    {
                        isLogged ? <NewCommentForm
                            user={this.props.user}
                            comment={this.props.data.comment}
                            changeComment={this.props.changeComment}
                            filmId={this.props.data.film.filmId}
                            addComment={this.props.addComment} />
                            : <div className='page__boolComment'>
                                <Link to='/login' style={{ textDecoration: 'none' }}>
                                    Login
                            </Link> to leave a comment.</div>
                    }
                </div>
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
        deleteComment: bindActionCreators(deleteComment, dispatch),
        modifyRating: bindActionCreators(modifyRating, dispatch),
        getMark: bindActionCreators(getMark, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage) 