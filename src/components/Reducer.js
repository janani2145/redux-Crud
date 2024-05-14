import { CREATE_TASK, GET_TASK, DELETE_TASK, GETBYID_TASK, UPDATE_TASK} from './actionTypes';

const initialState = {
  employees: [],
  employee: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        employees: [...state.inputs, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        employees: state.inputs.map((input) => (input.id === action.payload.id ? action.payload : input)),
      };
    case DELETE_TASK:
      return {
        ...state,
        employees : state.inputs.filter((input) => input.id !== action.payload),
      };
    case GET_TASK:
      return {
        ...state,
        employees : action.payload,
      };
    case GETBYID_TASK:
      return {
        ...state,
        employees : action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;