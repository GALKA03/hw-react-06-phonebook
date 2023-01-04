import { Label, Input } from './Filter.style';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selector';
import { addFilter } from 'redux/filter/filter-createSlise'

export const Filter = () => {
   const filter = useSelector(getFilter)

  const dispatch = useDispatch()
  const newFilter = (e) => {
    dispatch(addFilter(e.currentTarget.value))
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

