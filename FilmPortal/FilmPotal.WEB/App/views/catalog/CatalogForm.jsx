import React from 'react';
import Sorter from '../../components/Sorter.jsx'
import { Eclipse } from "react-loading-io";

const CatalogForm = (props) => {
    return (
        <React.Fragment>
            <div className="catalog">
                <div className="sorter">
                    <Sorter getFilms={props.getFilms} />
                </div>
                {
                    props.isLoading ? <div className='loader'><Eclipse color={'black'} /></div> :

                        <div className="containers">
                            <div> {props.films} </div>
                            <div className="pagination">
                                {props.renderPageNumbers}
                            </div>
                        </div>
                }
            </div>
        </React.Fragment>
    );
}

export default CatalogForm;
