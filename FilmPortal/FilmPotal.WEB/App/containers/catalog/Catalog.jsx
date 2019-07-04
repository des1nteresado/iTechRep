import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getFilms } from './catalogActions.jsx'

class Catalog extends React.Component {

    componentDidMount() {
        this.props.getFilms(0);
    }

    render() {
        let films = this.props.films.records.map(item => {
            return (
                <div key={item.filmId} className="film">
                    <div className="name">{item.name}</div>
                    <div className="description">Описание: {item.description}</div>
                    <div className="year">Год выпуска:{item.year}</div>
                    <div className="producer">Режисёр: {item.producer}</div>
                    <div className="averageMark">Рейтинг: {item.averageMark} ({item.markCount})</div>
                    <div className="commentCount">Комментарии: {item.commentCount}</div>
                    <hr />
                </div>
            );
        });

        return (
            <div id="catalog">
                {films}
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        films: state.data,
        error: state.error
    }
}

let mapDispatch = (dispatch) => {
    return {
        getFilms: (index, sortOrder) => dispatch(getFilms(index, sortOrder))
    }
}

export default connect(mapProps, mapDispatch)(Catalog);