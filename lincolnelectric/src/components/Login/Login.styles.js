import styled from 'styled-components';


export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    //max-width: 2000px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Content = styled.div`
    //max-width: 600px;
    //this is the block I want to center vertically & horizontally
    background-color: #f07122;
    position: absolute;
    top:50%;
    left:50%;
    width:60%;//change accordingly or even not necessary to define
    height:50%;//change accordingly or even not necessary to define
    margin-top: 50px;
    transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -o-transform:translate(-50%,-50%);
    border-radius: 30px;
    
`

export const BrandingImg = styled.img`
    width: 700px;
    float: right;
    @media screen and (max-width: 500px)
    {
        width: 400px;
    };
`;

export const LoginForm = styled.div `
    padding: 50px 100px;
    
    h1 {
        text-align: center;
    }

    .formGroup {
       // padding: 50px 100px;
       margin-top: 100px;
    }

    button {
        float: right;
    }

    p {
        text-align:center;
    }
    /* p {
        position: absolute;
       // bottom: 0;
        align-items:center;
        left: 200px;
    } */
`;