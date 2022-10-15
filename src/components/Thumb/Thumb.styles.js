import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    border-radius: 15px;
    max-width: 720px;
    transition:  all 0.3s;
    object-fit: cover;
    /* border: 3px solid red; */
    animation: animateThumb 0.8s;

    :hover{
        opacity: 0.8;
    }

    @keyframes animateThumb{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    } 
`;
