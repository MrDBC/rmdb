import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    margin: 20px auto;
    color: white;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border: 0;
    border-radius: 30px;
    font-size: 30px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s;

    :hover{
        opacity: 0.8;
    }
`;