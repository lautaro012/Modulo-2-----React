export function getMovies(titulo) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=79eae314&s=" + titulo)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
          });
      };
}


export function getMovieDetail(idmovie) {
    return function(dispatch) {
        fetch("http://www.omdbapi.com/?apikey=79eae314&i=" + idmovie)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type:'MOV_DET',
                payload: data
            })
        })
    }

}

export function addMovieFavorite(payload) {
    return {
        type: 'ADD_FAV',
        payload,
    }

}



export function removeMovieFavorite(idmovie) {
    return {
        type: 'RMV_FAV',
        payload: idmovie
    }
}