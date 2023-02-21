export const GET_USER_PROFILE_LIST = "GET_USER_PROFILE_LIST"; //GET - fetches the user list https://striveschool-api.herokuapp.com/api/profile/
export const GET_USER_PROFILE_API = "GET_USER_PROFILE_API"; //GET - Retrieves the API owner's profile https://striveschool-api.herokuapp.com/api/profile/me
export const GET_USER_PROFILE_ID = "GET_USER_PROFILE_ID"; //GET - Retrieves a specifit profile with ID https://striveschool-api.herokuapp.com/api/profile/{userId}
export const PUT_USER_PROFILE_UPDATE = "PUT_USER_PROFILE_UPDATE"; //PUT - Update the current user's profile https://striveschool-api.herokuapp.com/api/profile/
export const GET_USER_LOADING = "GET_USER_LOADING"; //For loaders & spinners
export const GET_USER_ERROR = "GET_USER_ERROR"; //For error messages
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
export const GET_ALL_PROFILE = "GET_ALL_PROFILE";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_SPECIFIC_PROFILE = "GET_SPECIFIC_PROFILE";
export const GET_EXPERIENCE_WITH_EXP_ID = "GET_EXPERIENCE_WITH_EXP_ID";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";

export const getUserProfileApi = () => {
    const options = {
        method: "GET",
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0YzEzYjExZDczZDAwMTM3YWFiMWIiLCJpYXQiOjE2NzY5ODQ2MzYsImV4cCI6MTY3ODE5NDIzNn0.ajqHRiRUfFAyQ7p5JRd3Na68gggeaCwfze2yPxkA0EE",
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
    const nameInput = document.getElementById("change-name")
    const surnameInput = document.getElementById("change-surname")
    const emailInput = document.getElementById("change-email")
    const titleInput = document.getElementById("change-title")
    const areaInput = document.getElementById("change-area")
    const usernameInput = document.getElementById("change-username")
    const bioInput = document.getElementById("change-bio")
    const editedData = {
        "name": nameInput.value,
        "surname": surnameInput.value,
        "email": emailInput.value,
        "title": titleInput.value,
        "area": areaInput.value,
        "username": usernameInput.value,
        "bio": bioInput.value
    }

    const options = {
        method: "PUT",
        headers: new Headers(
            {
                "Content-Type": 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0YzEzYjExZDczZDAwMTM3YWFiMWIiLCJpYXQiOjE2NzY5ODQ2MzYsImV4cCI6MTY3ODE5NDIzNn0.ajqHRiRUfFAyQ7p5JRd3Na68gggeaCwfze2yPxkA0EE',
            }),
        body: JSON.stringify(editedData),
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

export const getSearchResultActionAsync = (data, search) => {
    return {
        type: GET_SEARCH_RESULT,
        payload: data.filter(
            (el) =>
                el.name.toLowerCase().includes(search.toLowerCase()) ||
                el.surname.toLowerCase().includes(search.toLowerCase())
        ),
    };
};

export const getUserProfileApi = () => {
    const options = {
        method: "GET",
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0OTAxNzExZDczZDAwMTM3YWFhZTQiLCJpYXQiOjE2NzY5NzIwNTUsImV4cCI6MTY3ODE4MTY1NX0.1aXNualFVdmtwB69PKh30KDhyA2nhUtW2MLjYMIt0qw",
        },
    };
    return async (dispatch, getState) => {
        const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/me`;
        try {
            let resp = await fetch(baseEndpoint, options);
            if (resp.ok) {
                dispatch({
                    type: GET_USER_LOADING,
                    payload: true,
                });
                let data = await resp.json();
                dispatch({
                    type: GET_USER_PROFILE_API,
                    payload: data,
                });
                dispatch({
                    type: GET_USER_LOADING,
                    payload: false,
                });
            } else {
                dispatch({
                    type: GET_USER_LOADING,
                    payload: false,
                });
                dispatch({
                    type: GET_USER_ERROR,
                    payload: true,
                });
            }
        } catch (error) {
            dispatch({
                type: GET_USER_LOADING,
                payload: false,
            });
            dispatch({
                type: GET_USER_ERROR,
                payload: true,
            });
        }
    };
};

export const putUserProfileApi = () => {
    const data = { username: "example" };
    const options = {
        method: "PUT",
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0OTAxNzExZDczZDAwMTM3YWFhZTQiLCJpYXQiOjE2NzY5NzIwNTUsImV4cCI6MTY3ODE4MTY1NX0.1aXNualFVdmtwB69PKh30KDhyA2nhUtW2MLjYMIt0qw",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    return async (dispatch, getState) => {
        const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/`;

        try {
            let resp = await fetch(baseEndpoint, options);
            if (resp.ok) {
                dispatch({
                    type: GET_USER_LOADING,
                    payload: true,
                });
                let data = await resp.json();
                dispatch({
                    type: PUT_USER_PROFILE_UPDATE,
                    payload: data,
                });
                dispatch({
                    type: GET_USER_LOADING,
                    payload: false,
                });
            } else {
                dispatch({
                    type: GET_USER_LOADING,
                    payload: false,
                });
                dispatch({
                    type: GET_USER_ERROR,
                    payload: true,
                });
            }
        } catch (error) {
            dispatch({
                type: GET_USER_LOADING,
                payload: false,
            });
            dispatch({
                type: GET_USER_ERROR,
                payload: true,
            });
        }
    };
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

export const deleteSpecificExperienceAction = (query, expId) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${query}/experiences${expId}`,
                { method: "DELETE" }
            );
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                dispatch({
                    type: DELETE_EXPERIENCE,
                    payload: data,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};
