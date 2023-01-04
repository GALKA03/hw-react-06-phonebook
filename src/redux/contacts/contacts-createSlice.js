import { createSlice } from "@reduxjs/toolkit";
//state
import { nanoid } from 'nanoid';
const initialState = {
    contacts:[]
}
//const id = nanoid()
const contactsSlice = createSlice({
    name: 'contacts',
    // id:nanoid(),
    initialState,
    reducers: {
    prepare() {
            return {
                payload: {
                    id: nanoid(),
                     completed: false,
                }
            }
        },
        addContacts: (state, { payload }) => {
            state.contacts.push(payload)  
        },
        deleteContacts: (state, { payload }) => {
            state.contacts = state.contacts.filter(({ id }) => id !== payload)
        },
        
    
    }
})
export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;


// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     // Код остальных редюсеров
//   },
// });