import styled from 'styled-components';
import { Container } from 'react-bootstrap';


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
    top:40%;
    left:50%;
    width:80%;//change accordingly or even not necessary to define
    //height:70%;//change accordingly or even not necessary to define
    //margin-top: 50px;
    transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -o-transform:translate(-50%,-50%);
    border-radius: 30px;
    margin-bottom: 50px;
    //overflow: auto;
    h1 {
        text-align: center;
        padding-top: 20px;
    }

    .formCheckbox {
        padding-top: 10px; 
        margin-left: 5px;
    }

    .form-label {
        margin-bottom: 0;
        margin-top: .5rem;
        font-weight: 100;
    }
`

// export const RegisterForm = styled.div `
//     padding: 50px 100px;

//     .formGroup {
//        // padding: 50px 100px;
//        margin-top: 100px;
//     }

//     button {
//         float: right;
//     }

//     p {
//         text-align:center;
//     }
//     /* p {
//         position: absolute;
//        // bottom: 0;
//         align-items:center;
//         left: 200px;
//     } */
// `;