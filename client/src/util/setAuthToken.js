import axios from "axios";

const setAuthToken = () => {
  //dont add async in this it wont work
  const token = localStorage.getItem("currentToken"); //check wheter ther is a token in the storge if yes, send an axios request that is secured(/auth) and from its return determine whther token is valid or nopt then redirect
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    const res = axios.get("http://localhost:5000/auth");
    if (res) {
      return true;
    } else {
      localStorage.removeItem("currentToken");
      return false;
    }
  } else return false;
};

export default setAuthToken;
