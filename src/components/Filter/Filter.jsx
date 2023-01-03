import PropTypes from 'prop-types';

import { Label, Input } from './Filter.style';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selector';
import { addFilter } from 'redux/filter/filter-createSlise'

export const Filter = () => {
   const filter = useSelector(getFilter)
  // console.log(filter)
  const dispatch = useDispatch()
  const newFilter = (e) => {
    dispatch(addFilter(e.currentTarget.value))
    //console.log(addFilter(e.currentTarget.value))
  }
  
    return (
         <Label>{''}
        Find contacts by name
          <Input  type="text"
            value={filter}
            onChange={newFilter} 
            name="filter"
          placeholder="enter name"
          /> 
        </Label>  
    )
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };