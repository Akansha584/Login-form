import { FETCHED_LOGIN_DATA } from "../actions/fetch_login_data";
import { FETCHED_EMPLOYEE_LIST } from "../actions/fetch_employee_list";

const initialState = {};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_LOGIN_DATA:
      return {
        ...state,
        loginDetails: action.data,
      };

    case FETCHED_EMPLOYEE_LIST:
      return {
        ...state,
        employeeList: action.data,
      };

    default:
      return state;
  }
};

export default dataReducer;
