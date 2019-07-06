import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Film extends React.Component {
    render() {
        let commentBlock;
        if (!this.props.isFull) {
            commentBlock =
                <Link className="link" to={"/catalog/film?filmId=" + this.props.data.filmId}>Комментарии:{this.props.data.commentCount}</Link>;
        }

        return (
            <div className="film">
                <div className="header">
                    <Link className="link" to={"/catalog/film?filmId=" + this.props.data.filmId}>{this.props.data.name}</Link>
                </div>
                <div className="content">
                    <div>
                        <div className="description">Описание: {this.props.data.description}</div>
                        <div className="year">Год выпуска:{this.props.data.year}</div>
                        <div className="producer">Режисёр: {this.props.data.producer}</div>
                        <div className="averageMark">Рейтинг: {this.props.data.averageMark} ({this.props.data.markCount})</div>
                    </div>
                    <div className="footer">
                        <div className="actionBlock">
                            <div className="commentsBlock">
                                {commentBlock}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};