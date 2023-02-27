import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = { value: [] };
const contatsSlice = createSlice({
    name: 'contacts',
     initialState,
 
    reducers: {
        addContact: {
      reducer(state, action) {
        state.value.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

        deleteContact(state, action) {
        const index = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },

  },
})

export const { addContact, deleteContact } = contatsSlice.actions;
export const  contactsReducer = contatsSlice.reducer;
