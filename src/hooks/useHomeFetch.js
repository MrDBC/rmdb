// react wants all your custom hooks to start with "use" and then file_name.
import { useState, useEffect, useRef } from "react";

//api
import API from '../API';

//helpers
import { isPersistedState } from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    //console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            //console.log(movies);

            //never mutate a state in react , always use a setter to mutate a state
            setState(prev => ({ //parenthesis is for returning an object, because 
                //inside curly braces{}, we will be creating an object
                ...movies,
                results:
                    page > 1 ?
                        [...prev.results, ...movies.results] :
                        [...movies.results]
            }));

        } catch (error) {
            setError(true);
        }

        setLoading(false);
    };

    //initial render and search //inline arrow function
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {     // dont fetch from the api
                console.log("Grabbing from the session storage")
                setState(sessionState);
                return;
            }
        }

        console.log("Grabbing from the Api")
        setState(initialState);     //wipe out whole state before searching new movie
        fetchMovies(1, searchTerm);
    }, [searchTerm]) // when we specify it as an empty array , it wil run/trigger only once on mount
    // but we also want to trigger each time when the user searchs for movies
    // we want to trigger the useEffect when the "searchTerm " changes


    //load more movie pages 
    useEffect(() => {
        if (!isLoadingMore) return; //not loading , just return

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page]);

    //write to session storage
    useEffect(() => {
        if (!searchTerm) {
            sessionStorage.setItem('homeState', JSON.stringify(state));
        }

    }, [searchTerm, state]);


    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };

};

//{inital render and search }: if we have anything on the session storage,
//                             we retrieve it instead of retrieving from the API