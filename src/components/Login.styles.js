import styled from "styled-components";

export const Wrapper = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 350px;
    border: 3px solid red;
    padding: 20px;
    margin: 0 auto;
    margin-top: 30px;
    color: var(--darkGrey);

    input{
        width: 200px;
        height: 30px;
        border: 1px solid var(--darkGrey);
        border-radius: 20px;
        margin: 10px 0;
        padding: 10px;
    }
`;