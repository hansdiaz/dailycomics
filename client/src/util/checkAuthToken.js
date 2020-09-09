const jwt = require("jsonwebtoken");

const checkAuthToken = () => {
  //dont add async in this it wont work

  var isExpired = false;
  const token = localStorage.getItem("currentToken");
  if (token) {
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
  }
};

export default checkAuthToken;
