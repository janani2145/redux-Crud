// CrudApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, updateItem } from './crudSlice';

function CrudApp() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.crud.items);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState({ id: null, text: '' });

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      dispatch(addItem({ id: Math.random().toString(), text: newItem }));
      setNewItem('');
    }
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleUpdateItem = () => {
    if (editItem.text.trim() !== '') {
      dispatch(updateItem({ id: editItem.id, text: editItem.text }));
      setEditItem({ id: null, text: '' });
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => setEditItem({ id: item.id, text: item.text })}>Edit</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editItem.id !== null && (
        <div>
          <input
            type="text"
            value={editItem.text}
            onChange={(e) => setEditItem({ ...editItem, text: e.target.value })}
            placeholder="Update item"
          />
          <button onClick={handleUpdateItem}>Update</button>
        </div>
      )}
    </div>
  );
}

export default CrudApp;
