export const GET_USER_PROFILE_LIST = 'GET_USER_PROFILE_LIST' //GET - fetches the user list https://striveschool-api.herokuapp.com/api/profile/
export const GET_USER_PROFILE_API = 'GET_USER_PROFILE_API' //GET - Retrieves the API owner's profile https://striveschool-api.herokuapp.com/api/profile/me
export const GET_USER_PROFILE_ID = 'GET_USER_PROFILE_ID' //GET - Retrieves a specifit profile with ID https://striveschool-api.herokuapp.com/api/profile/{userId}
export const PUT_USER_PROFILE_UPDATE = 'PUT_USER_PROFILE_UPDATE' //PUT - Update the current user's profile https://striveschool-api.herokuapp.com/api/profile/
export const GET_USER_LOADING = 'GET_USER_LOADING' //For loaders & spinners
export const GET_USER_ERROR = 'GET_USER_ERROR' //For error messages

export const getUserProfileApi = () => {
    const options = {
        method: "GET",
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0OTAxNzExZDczZDAwMTM3YWFhZTQiLCJpYXQiOjE2NzY5NzIwNTUsImV4cCI6MTY3ODE4MTY1NX0.1aXNualFVdmtwB69PKh30KDhyA2nhUtW2MLjYMIt0qw",
        },
    };
    return async (dispatch, getState) => {

        const baseEndpoint =
            `https://striveschool-api.herokuapp.com/api/profile/me`
        try {
            let resp = await fetch(baseEndpoint, options);
            if (resp.ok) {
                dispatch({
                    type: GET_USER_LOADING,
                    payload: true,
                })
                let data = await resp.json();
                dispatch({
                    type: GET_USER_PROFILE_API,
                    payload: data,
                })
                dispatch({
                    type: GET_USER_LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: GET_USER_LOADING,
                    payload: false,
                })
                dispatch({
                    type: GET_USER_ERROR,
                    payload: true,
                })
            }
        } catch (error) {
            dispatch({
                type: GET_USER_LOADING,
                payload: false,
            })
            dispatch({
                type: GET_USER_ERROR,
                payload: true,
            })
        }
    }
}

export const putUserProfileApi = () => {
    const data = { username: 'example' };
    const options = {
        method: "PUT",
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0OTAxNzExZDczZDAwMTM3YWFhZTQiLCJpYXQiOjE2NzY5NzIwNTUsImV4cCI6MTY3ODE4MTY1NX0.1aXNualFVdmtwB69PKh30KDhyA2nhUtW2MLjYMIt0qw",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };
    return async (dispatch, getState) => {

        const baseEndpoint =
            `https://striveschool-api.herokuapp.com/api/profile/`

        try {
            let resp = await fetch(baseEndpoint, options);
            if (resp.ok) {
                dispatch({
                    type: GET_USER_LOADING,
                    payload: true,
                })
                let data = await resp.json();
                dispatch({
                    type: PUT_USER_PROFILE_UPDATE,
                    payload: data,
                })
                dispatch({
                    type: GET_USER_LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: GET_USER_LOADING,
                    payload: false,
                })
                dispatch({
                    type: GET_USER_ERROR,
                    payload: true,
                })
            }
        } catch (error) {
            dispatch({
                type: GET_USER_LOADING,
                payload: false,
            })
            dispatch({
                type: GET_USER_ERROR,
                payload: true,
            })
        }
    }
};

// export const getSpecificProfileAction = (query) => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await fetch(
//         "https://striveschool-api.herokuapp.com/api/profile/" + query,
//         options
//       );
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         dispatch({
//           type: GET_SPECIFIC_PROFILE,
//           payload: data,
//         });
//     }
// }
//   }
// }
