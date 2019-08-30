import React from 'react';
import { Link } from 'react-router-dom';
import Film from '../../components/Film.jsx';
import NewCommentForm from '../../components/NewCommentForm.jsx';

const FilmPageForm = (props) => {
    return (
        <div className="page">
        <div className="page__info">
            <Film data={props.data.film} rating={props.data.rating} modifyRating={props.modifyRating} user={props.user} isLogged={props.isLogged} isFull={true} />
        </div>
        <div className='page__images'>
            {props.gallery}
        </div>
        <div className="page__comments">
            <p className="page__commentCount">Comments: {props.data.film.commentCount} </p>
            {props.comments}
            <p className="page__newComment">Leave a comment</p>
            {
                props.isLogged ? <NewCommentForm
                    user={props.user}
                    comment={props.data.comment}
                    changeComment={props.changeComment}
                    filmId={props.data.film.filmId}
                    addComment={props.addComment} />
                    : <div className='page__boolComment'>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            Login
                    </Link> to leave a comment.</div>
            }
        </div>
    </div>
    );
}

export default FilmPageForm;
