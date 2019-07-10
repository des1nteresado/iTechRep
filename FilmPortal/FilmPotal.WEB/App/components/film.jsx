import React from 'react';
import { Link } from 'react-router-dom';
import { getMark } from '../services/filmService';
import Paper from '@material-ui/core/Paper';
const stub = '/images/cinema.jpg'

const Film = props => {
    let commentBlock;
    if (!props.isFull) {
        commentBlock =
            <Link className="comment" to={"/catalog/film?filmId=" + props.data.filmId}>Комментарии: {props.data.commentCount}</Link>;
    }

    let image = !!props.data.images.length ? props.data.images["0"].path : stub;

    return (
        <Paper className='container'>
            <div className="film">
                <div className="film__img">
                    <Link to={"/catalog/film?filmId=" + props.data.filmId}>
                    <img src={image ? image : stub} height='350px' width='280px' border-radius='20%' />
                    </Link>
            </div>
            <div className="film__content">
                <p><Link className="film__name" to={"/catalog/film?filmId=" + props.data.filmId}>{props.data.name}</Link></p>
                <p className="film__producer">Режисёр: {props.data.producer}</p>
                <p className="film__year">Год выпуска: {props.data.year}</p>
                <div className="film__mark">Рейтинг: {props.data.averageMark} ({props.data.markCount})</div>
                <p className="film__description"> {props.data.description} </p>
                <div className="film__comments">
                    {commentBlock}
                </div>
            </div>
            </div>
        </Paper >
    );
};

export default Film;