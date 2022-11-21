import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../store/actions/todoActions';
import Filter from '../pure/Filter';

const mapStateToProps = (state, ownProps) => {
    return { 
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickFilter: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterContainer=connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;