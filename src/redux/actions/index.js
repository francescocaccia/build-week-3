export const SET_PROFILE = "SET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const SET_EXPERIENCE = "SET_EXPERIENCE";
export const GET_POST = "GET_POST";

export const setExperienceAction = dato => {
  return { type: SET_EXPERIENCE, payload: dato };
};
export const setProfileAction = dato => {
  return { type: SET_PROFILE, payload: dato };
};

export const updateProfileAction = dato => {
  return { type: UPDATE_PROFILE, payload: dato };
};

export const getPostAction = dato => {
  return { type: GET_POST, payload: dato };
};

export const profileFetch = () => {
  return async dispatch => {
    const URL = "https://striveschool-api.herokuapp.com/api/profile/me";
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
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

export const experienceFetch = userID => {
  return async dispatch => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`;
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        let dato = await risposta.json();
        dispatch(setExperienceAction(dato));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPostFetch = () => {
  return async dispatch => {
    const URL = `https://striveschool-api.herokuapp.com/api/posts/`;
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        let dato = await risposta.json();
        dispatch(getPostAction(dato));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
