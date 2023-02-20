export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const GET_SONGS = 'GET_SONGS'
export const GET_SONGS_LOADING = 'GET_SONGS_LOADING'
export const GET_SONGS_ERROR = 'GET_SONGS_ERROR'
export const REPLACE_PLAYER = 'REPLACE_PLAYER'

export const addToFavoritesAction = (data) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: data,
    }
}

export const removeFromFavoritesAction = (i) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: i,
    }
}