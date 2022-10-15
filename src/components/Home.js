import React, { useState, useEffect } from 'react';
//api

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';


//hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore } = useHomeFetch(); //es6 destructuring 
    console.log(state);

    if (error) return <div>Something is wrong#######</div>;

    return (
        <>
            {!searchTerm && state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} //big movie poster
                    title={state.results[0].original_title}                                     // movie name
                    text={state.results[0].overview}                                             // movie description
                />
                : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? 'Search Result' : 'Popular  Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable={true}
                        image={
                            // movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage; //new method
                            movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage //old method
                        }
                        movieId={movie.id}
                    />
                    //<div key={movie.id}>{movie.title}</div>
                    //key = {movie id }
                    // we get it from the Movie Database API
                ))}
            </Grid>

            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More..." callback={() => setIsLoadingMore(true)} />
            )}
        </>

    )
};

export default Home;

//the red ones are the props
// if the page is loading, show spinner
//else,     if it isnt the last page and the spinner is not loading , 
// show button (LOAD MORE...)