import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({ active, onClickFilter, children}) => {
    if (active) {
        return (<span className='active'>{children}</span>) 
    }
    
    return (
        <button 
            className='filter' 
            onClick={
                (e) => {
                    e.preventDefault();
                    onClickFilter();
                }
            }>
            {children}
        </button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClickFilter: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};


export default Filter;
