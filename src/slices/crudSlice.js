
import { createSlice } from '@reduxjs/toolkit';

const crudSlice = createSlice({
  name: 'crud',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, text } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.text = text;
      }
    },
  },
});

export const { addItem, deleteItem, updateItem } = crudSlice.actions;

export default crudSlice.reducer;
