import styled from "styled-components";

export const Wrapper = styled.div` 
    display: flex;
    background: var(--darkGrey);
    align-items: center;
    width: 100%;
    min-height: 100px;
    padding: 0 50px;
`;

export const Content = styled.div` 
    width: 100%;
    display: flex;
    margin: 0 atuo;

    .column{
        display: flex;
        align-items:  center;
        justify-content: center;
        font-weight: bolder;
        font-size: 100px;
        background: var(--medGrey);
        border-radius: 20px;
        margin: 0 20px;
        flex: 1;
        
        
        :first-child{
            margin-left: 0;
        }

        :last-child{
            margin-right: 0;
        }
        p{
            font-size: 18px;
        }
    }

    @media screen and (max-width: 768px){
        display: block;
        
        .column{
            margin: 20px 0;
            
        }
    }
`;