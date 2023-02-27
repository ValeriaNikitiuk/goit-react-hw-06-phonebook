import { addFilter } from 'redux/filterSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.value;
    dispatch(addFilter(name));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        onChange={handleChange}
        name="name"
      />
    </div>
  );
};

export default Filter;
