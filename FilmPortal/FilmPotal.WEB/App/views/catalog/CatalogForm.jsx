import React from 'react';
import Sorter from '../../components/Sorter.jsx'

const CatalogForm = (props) => {
    return (
        <div className="catalog">
            <div className="sorter">
                <Sorter getFilms={props.getFilms} />
            </div>
            <div className="containers">
                <div> {props.films} </div>
                <div className="pagination">
                    {props.renderPageNumbers}
                </div>
            </div>
        </div>
    );
}

export default CatalogForm;
