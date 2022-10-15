import styled from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    //border: 2px solid red;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1{
        color: red;
    }

    @media screen and ( max-width: 770px){
        font-size: var(--fontBig);
    }
`;

export const Content = styled.div`
    padding: 10px 20px ;
    //border:2px solid blue;
    display:  grid;
    grid-template-columns: repeat(auto-fill, minmax( 200px, 1fr));
    grid-gap: 2rem;     // gap horizontally and vertically

`;