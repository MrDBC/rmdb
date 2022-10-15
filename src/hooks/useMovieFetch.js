import { useState, useEffect } from "react";
import API from '../API';
//helpers
import { isPersistedState } from "../helpers";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setErrror] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setErrror(false);
                setLoading(true);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                //from the api, we get something called the crew, and this
                // contains more info(including director's name)
                // filtering out directors only out of so many info in "crew"
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({      //setState for just one movie
                    ...movie,       //dont need previous movies' info
                    actors: credits.cast,
                    directors       //long form->    directors: directors
                })

                setLoading(false);

            } catch {
                setErrror(true);
            }
        }                           // fetchMovie ends here

        const sessionState = isPersistedState(movieId);
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();
    }, [movieId]);                  //useEffect ends here

    //write to session storage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state])



    //u need to return something from the hook
    return { state, loading, error }
}












// using callbacks

// import { useState, useEffect, useCallback } from "react";
// import API from '../API';

// export const useMovieFetch = movieId => {
//     const [state, setState] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setErrror] = useState(false);

//     const fetchMovie = useCallback(async () => {
//         try {
//             setErrror(false);
//             setLoading(true);

//             const movie = await API.fetchMovie(movieId);
//             const credits = await API.fetchCredits(movieId);

//             //from the api, we get something called the crew, and this
//             // contains more info(including director's name)
//             // filtering out directors only out of so many info in "crew"
//             const directors = credits.crew.filter(
//                 member => member.job === 'Director'
//             );

//             setState({      //setState for just one movie
//                 ...movie,       //dont need previous movies' info
//                 actors: credits.cast,
//                 directors       //long form->    directors: directors
//             })

//             setLoading(false);

//         } catch {
//             setErrror(true);
//         }
//     }, [movieId])     // fetchMovie ends here


//     useEffect(() => {

//         fetchMovie();
//     }, [movieId, fetchMovie]);       //useEffect ends here


//     //u need to return something from the hook
//     return { state, loading, error }
// }
