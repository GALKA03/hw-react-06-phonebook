import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "redux/contacts/contacts-selectors";
import { useDispatch, useSelector } from 'react-redux';
//const dispatch = useDispatch();

const initialState = {
    filter:'',
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter: (state, { payload }) => {
            state.filter = payload
            }
    },
   
})

export const { addFilter} = filterSlice.actions;
export default filterSlice.reducer