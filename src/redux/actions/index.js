export const GET_SPECIFIC_PROFILE = "GET_SPECIFIC_PROFILE";

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2ExMDgzODFmYzAwMTNmZmZhZDUiLCJpYXQiOjE2NzY4ODQ0OTgsImV4cCI6MTY3ODA5NDA5OH0.kMJEmPVmd33b3qTFM8gkzO3XaoX9fCOfReR1XfJCObE",
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
