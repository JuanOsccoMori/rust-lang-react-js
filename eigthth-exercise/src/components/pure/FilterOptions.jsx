import React from 'react';
import FilterContainer from '../containers/FilterContainer';

const FilterOptions = () => {
    return (
        <div className='filters'>
        {/* Filter Containers */}
            <FilterContainer filter='SHOW_ALL'>
                All
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                COMPLETE
            </FilterContainer>

        </div>
    )
    
};


FilterOptions.propTypes = {
    
};


export default FilterOptions;
