import axios from "axios";
const jwt = require("jsonwebtoken");


const checkAuthToken = () => {
  //dont add async in this it wont work

  var isExpired = false;
  const token = localStorage.getItem('currentToken');
  var decodedToken = jwt.decode(token, { complete: true });
  var current_time = Date.now() / 1000;


  console.log(decodedToken.payload.exp);
  console.log(current_time);


  if (decodedToken.payload.exp < current_time) {

    isExpired = true;

    return false;

  } else {
    
    return true;

  }
  // const token = localStorage.getItem("currentToken"); //check wheter ther is a token in the storge if yes, send an axios request that is secured(/auth) and from its return determine whther token is valid or nopt then redirect
  // if (token) {
  //   axios.defaults.headers.common["x-auth-token"] = token;
  //   const res = axios.get("http://localhost:5000/auth");
  //   if (res) {
  //     console.log("token is here" + token);
  //     return true;
  //   } else {
  //     localStorage.removeItem("currentToken");
  //     return false;
  //   }
  // } else return false;
};

export default checkAuthToken;
