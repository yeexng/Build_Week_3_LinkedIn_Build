export const GET_SPECIFIC_PROFILE = "GET_SPECIFIC_PROFILE";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_EXPERIENCE_WITH_EXP_ID = "GET_EXPERIENCE_WITH_EXP_ID";

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmZlMTgzODFmYzAwMTNmZmZhY2YiLCJpYXQiOjE2NzY5NzU4NDgsImV4cCI6MTY3ODE4NTQ0OH0.egEO6YUhw6wz6sBlWZJnk4N3evV0CIAcVcsPGe4Y7mU",
  },
};

export const getSpecificProfileAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + query,
        options
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_SPECIFIC_PROFILE,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperienceAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${query}/experiences`,
        options
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_EXPERIENCE,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperienceWithExpIdAction = (query, expId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${query}/experiences${expId}`,
        options
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_EXPERIENCE_WITH_EXP_ID,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
