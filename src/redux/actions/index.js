export const SET_PROFILE = "SET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const SET_EXPERIENCE = "SET_EXPERIENCE";
export const GET_POST = "GET_POST";
export const GET_JOB = "GET_JOB";
export const GET_QUERY_JOB = "GET_QUERY_JOB";
export const LOADER_ON = "LOADER_ON";
export const LOADER_OFF = "LOADER_OFF";
export const ESPERIENZA_ON = "ESPERIENZA_ON";
export const ESPERIENZA_OFF = "ESPERIENZA_OFF";
export const SET_PROFILE_DETAILS = "SET_PROFILE_DETAILS";
export const MY_PROFILE_TRUE = "MY_PROFILE_TRUE";
export const GET_COMMENTI = "GET_COMMENTI";

export const getCommentiAction = dato => {
  return { type: GET_COMMENTI, payload: dato };
};
export const setProfileDetailsAction = dato => {
  return { type: SET_PROFILE_DETAILS, payload: dato };
};

export const getQueryJobAction = dato => {
  return { type: GET_QUERY_JOB, payload: dato };
};
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

export const getJobAction = dato => {
  return { type: GET_JOB, payload: dato };
};

export const profileFetch = () => {
  return async dispatch => {
    const URL = "https://striveschool-api.herokuapp.com/api/profile/me";
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        // mode: 'no-cors'
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

export const profileDetailFetch = id => {
  return async dispatch => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${id}`;
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        // mode: 'no-cors'
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        let dato = await risposta.json();
        dispatch(setProfileDetailsAction(dato));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const experienceFetch = userID => {
  return async dispatch => {
    dispatch({ type: ESPERIENZA_ON });
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
    } finally {
      dispatch({ type: ESPERIENZA_OFF });
    }
  };
};

export const getPostFetch = () => {
  return async dispatch => {
    dispatch({ type: LOADER_ON });

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
        dispatch(getPostAction(dato.reverse()));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: LOADER_OFF });
    }
  };
};

export const getJobFetch = () => {
  return async dispatch => {
    const URL = `https://strive-benchmark.herokuapp.com/api/jobs`;
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
        dispatch(getJobAction(dato));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getQueryJobFetch = (parametro, query) => {
  return async dispatch => {
    const URL = `https://strive-benchmark.herokuapp.com/api/jobs?${parametro}=${query}&limit=30`;
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
        dispatch(getQueryJobAction(dato.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCommentFetch = id => {
  return async dispatch => {
    // dispatch({ type: LOADER_ON });

    const URL = `https://striveschool-api.herokuapp.com/api/comments/${id}`;
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyODNkYzQ1NWZkYjAwMTQ3MzMwZTkiLCJpYXQiOjE2ODIwODA3MzIsImV4cCI6MTY4MzI5MDMzMn0.wx-UOTmYWcM6hSxrSS6bSWGZrFOSM6IJntWQdJoU0_Y",
      },
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        let dato = await risposta.json();
        dispatch(getCommentiAction(dato));
      }
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch({ type: LOADER_OFF });
    }
  };
};
