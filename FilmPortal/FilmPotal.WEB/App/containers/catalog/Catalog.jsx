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
                    <div className="description">{item.description}</div>
                    <div className="year">{item.year}</div>
                    <div className="producer">{item.producer}</div>

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