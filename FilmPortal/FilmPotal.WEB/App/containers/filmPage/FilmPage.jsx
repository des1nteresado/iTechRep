import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Comment from '../../components/Comment.jsx';
import { changeComment, getFilm, addComment, deleteComment, modifyRating, getMark } from '../../services/filmService.js'
import Carousel from 'react-images';
import FilmPageForm from '../../views/filmPage/FilmPageForm.jsx'

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
                <Comment key={item.commentId} isAccount={false} data={item} user={this.props.user} deleteComment={this.props.deleteComment} />
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
            <FilmPageForm
                isLogged={isLogged}
                gallery={gallery}
                comments={comments}
                data={this.props.data}
                user={this.props.user}
                modifyRating={this.props.modifyRating}
                addComment={this.props.addComment}
                changeComment={this.props.changeComment}
            />
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