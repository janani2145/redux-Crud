import axios from 'axios';
import { CREATE_TASK, GET_TASK, DELETE_TASK, GETBYID_TASK, UPDATE_TASK } from './actionTypes';
import { GET_TASK } from './Type';

export const createinput = (employee) => {
  return async (dispatch) => {
    const response = await axios.create('https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/student', employee);
    dispatch({ type: CREATE_TASK, payload: response.data });
  };
};

export const updateinput = (id, employee) => {
  return async (dispatch) => {
    const response = await axios.update('https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/${id}', employee);
    dispatch({ type: UPDATE_TASK, payload: response.data });
  };
};

export const deleteinput = (id) => {
  return async (dispatch) => {
    await axios.delete('https://65ae12861dfbae409a73dcb5.mockapi.io/:users/${id}');
    dispatch({ type: DELETE_TASK, payload: id });
  };
};

export const getinput = () => {
  return async (dispatch) => {
    const response = await axios.get('https://65ae12861dfbae409a73dcb5.mockapi.io/:users');
    dispatch({ type: GET_TASK, payload: response.data });
  };
};

export const getbyid = (id) => {
  return async (dispatch) => {
    const response = await axios.get('https://65ae12861dfbae409a73dcb5.mockapi.io/:users/${id}');
    dispatch({ type: GETBYID_TASK, payload: response.data });
  };
};