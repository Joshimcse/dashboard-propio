import jwt_decode from "jwt-decode";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GET_ERRORS = "GET_ERRORS";

export const loginUser = user => dispatch => {
  fetch("http://localhost:3000/server/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.ok === true) {
        const token = data.token;
        localStorage.setItem("jwt", token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        dispatch({
          type: GET_ERRORS,
          payload: {}
        });
      } else {
        dispatch(logoutUser());
        dispatch({
          type: GET_ERRORS,
          payload: data.err.message
        });
      }
    })
    .catch(err => {
      //error de servidor
      console.error(err);
      dispatch(logoutUser());
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};



export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwt");
  dispatch(setCurrentUser({}));
  
};
