import axios from "axios";
import { useHistory } from "react-router-dom";

function tokenizedCartRedirect() {
  let history = useHistory();
  var token = localStorage.getItem("currentToken");

  if (token != "") {
    const config = {
      headers: { "Content-Type": "application/json", "x-auth-token": token },
      mode: "cors",
    };
    const body = JSON.stringify(token);
    const res = axios
      .post("http://localhost:5000/auth", body, config)
      .then((res) => {
        history.push("/cart");
      })
      .catch((err) => {
        history.push("/login");
      });
  } else {
    history.push("/login");
  }
}

module.exports = { tokenizedCartRedirect };
