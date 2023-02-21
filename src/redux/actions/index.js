export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_LOADING = "GET_SONGS_LOADING";
export const GET_SONGS_ERROR = "GET_SONGS_ERROR";
export const REPLACE_PLAYER = "REPLACE_PLAYER";
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
export const GET_ALL_PROFILE = "GET_ALL_PROFILE";

export const addToFavoritesAction = (data) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: data,
  };
};

export const removeFromFavoritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: i,
  };
};

export const getSearchResultActionAsync = (data, search) => {
  return {
    type: GET_SEARCH_RESULT,
    payload: data.filter(
      (el) =>
        el.name.toLowerCase().includes(search.toLowerCase()) ||
        el.surname.toLowerCase().includes(search.toLowerCase())
    ),
  };
  //   return async (dispatch, getState) => {
  //     try {
  //       const response = await fetch(
  //         "https://striveschool-api.herokuapp.com/api/profile/"
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         dispatch({
  //           type: GET_SEARCH_RESULT,
  //           payload: data,
  //         });
  //       } else {
  //         alert("Error fetching results");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
};
export const getAllProfileActionAsync = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmQwZjgzODFmYzAwMTNmZmZhY2MiLCJpYXQiOjE2NzY4ODExNjgsImV4cCI6MTY3ODA5MDc2OH0._AkCrUr8_TcTB3UE7gFXvQyGL3dn4mbXdSjjU42xmYw",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_ALL_PROFILE,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
