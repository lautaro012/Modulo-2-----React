

const initialState = {
    moviesFavorite : [],
    moviesDetail : {},
    moviesLoaded : [],
}

function rootReducer (state = initialState, action) {
    if (action.type === 'ADD_FAV') {
        return {
            ...state,
            moviesFavorite : [...state.moviesFavorite, action.payload]
        }
    }
    if (action.type === 'GET_MOVIES') { 
        return {
            ...state,
            moviesLoaded: action.payload.Search, //Asi se llama el objeto donde estan las peliculas en la API.
        }

    }
    if (action.type === 'MOV_DET') {
        return {
            ...state,
            moviesDetail: action.payload,
        }
    }
    if (action.type === 'RMV_FAV') {
        return {
            ...state,
            moviesFavorite: state.moviesFavorite.filter((e) => e.imdbID !== action.payload)
        }
    }
    return state;
}


export default rootReducer;