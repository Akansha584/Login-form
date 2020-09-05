import { employee_list } from "../../components/loginData";

export const FETCHED_EMPLOYEE_LIST = "FETCHED_EMPLOYEE_LIST";

export const receive_employeeList = () => {
  return {
    type: FETCHED_EMPLOYEE_LIST,
    data: employee_list,
  };
};
