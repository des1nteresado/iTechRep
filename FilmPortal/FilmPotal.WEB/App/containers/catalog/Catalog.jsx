﻿import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Film from '../../components/Film.jsx';
import getFilms from '../../services/catalogService.js'
import CatalogForm from '../../views/catalog/CatalogForm.jsx'

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: location.search };
    }

    componentDidMount() {
        this.getFilms();
    }

    getFilms() {
        let pageIndex;
        let sortOrder;
        const parsed = queryString.parse(location.search);
        if (parsed) {
            pageIndex = parsed['pageIndex'];
            sortOrder = parsed['sortOrder'];
        }
        this.props.getFilms(pageIndex, sortOrder);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.query != location.search) {
            this.setState({ query: location.search });
            this.getFilms();
        }
    }

    render() {
        const total = this.props.films.totalPages;
        const pageSize = this.props.films.pageSize;
        const pageNumbers = [];
        let params = queryString.parse(location.search);
        let queryTrailer = '';
        if (params.sortOrder) {
            queryTrailer = "&sortOrder=" + params.sortOrder;
        }
        for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <Link key={number} className="link" to={"/catalog?pageIndex=" + (number - 1) + queryTrailer}>{number}</Link>
            );
        });

        let films = this.props.films.records.map(item => {
            return (
                <Film key={item.filmId} data={item} isFull={false} />
            );
        });

        return (
            <CatalogForm
            getFilms={this.props.getFilms}
            films={films}
            renderPageNumbers={renderPageNumbers}
            isLoading={this.props.isLoading}
            />
        );
    }
};

let mapStateToProps = (state) => {
    return {
        films: state.catalog.data,
        isLoading: state.catalog.loading,
        error: state.catalog.error,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getFilms: bindActionCreators(getFilms, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog) 
