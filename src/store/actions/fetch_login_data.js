import { login_data } from "../../components/loginData";

export const FETCHED_LOGIN_DATA = "FETCHED_LOGIN_DATA";

export const receive_loginData = () => {
  return {
    type: FETCHED_LOGIN_DATA,
    data: login_data,
  };
};
