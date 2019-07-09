import React from 'react';
import { Link } from 'react-router-dom';
import { getMark } from '../services/filmService';
import Paper from '@material-ui/core/Paper';

const Film = props => {
    let commentBlock;
    if (!props.isFull) {
        commentBlock =
            <Link className="link" to={"/catalog/film?filmId=" + props.data.filmId}>Комментарии:{props.data.commentCount}</Link>;
    }

    return (
            <Paper className='film'>
            <div className="header">
                <Link className="link" to={"/catalog/film?filmId=" + props.data.filmId}>{props.data.name}</Link>
            </div>
            <div className="content">
                <div>
                    <div className="year">Год выпуска:{props.data.year}</div>
                    <div className="producer">Режисёр: {props.data.producer}</div>
                    <div className="averageMark">Рейтинг: {props.data.averageMark} ({props.data.markCount})</div>
                </div>
                <div className="footer">
                    <div className="actionBlock">
                        <div className="commentsBlock">
                            {commentBlock}
                        </div>
                    </div>
                </div>
            </div> 
            </Paper>
    );
};

export default Film;