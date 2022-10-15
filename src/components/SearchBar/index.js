
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//image
import searchIcon from '../../images/search-icon.svg';

//styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');

    //we only want to trigger when the user has typed in something, and not on every render => thats why we use useRef()
    const initial = useRef(true);   // we can compare it(i.e., initial) to a mutable variable

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer);    //every time before a new render, it will
        // trigger this function
    }, [setSearchTerm, state])              // dependency array

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input type="text"
                    placeholder="Search Movies..."
                    onChange={event => setState(event.currentTarget.value)}
                    // we could also do 
                    //onChange ={setState}, but we need to send args(in this case,
                    // event; thats why we used an inline function)

                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar;

