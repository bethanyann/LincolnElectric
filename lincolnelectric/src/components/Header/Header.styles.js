import styled from 'styled-components';


export const Wrapper = styled.div`
    background: var(--darkGrey, #1c1c1c);
    padding: 0 10px;
`;

export const Content = styled.div`
    display: flex;
    //align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 5px 30px;
    /* margin: 0 auto; */
`;

export const LogoImg = styled.img`
    width: 150px;
    @media screen and (max-width: 500px)
    {
        width: 50px;
    };
`;
