export const SET_PROFILE = "SET_PROFILE";

export const setProfileAction = dato => {
  return { type: SET_PROFILE, payload: dato };
};

export const profileFetch = () => {
  return async dispatch => {
    const URL = "https://striveschool-api.herokuapp.com/api/profile/me";
    const headers = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkNmI5MzAwOWJjODAwMTRmZTVkYjMiLCJpYXQiOjE2ODE3NDY4NDYsImV4cCI6MTY4Mjk1NjQ0Nn0.-ECX5jyKTebeCG0soln4CJ0F3GsAyQmyxv2WsL6F6s4",
      },
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        let dato = await risposta.json();
        dispatch(setProfileAction(dato));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
