import React, { useState, useEffect } from 'react';
import { Wrapper, Content, BrandingImg, LoginForm } from './Login.styles';
import IMG from '../../images/loginvector.png';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

//children is a default prop that we can use; when we nest stuff inside a compoenent its avalible in the children prop
const Login = () => {
    return(
        <Wrapper> 
            <Content>
                
                    <Row>
                        <Col>  
                        <LoginForm>
                            <h1>Login</h1>
                           <Form className='formGroup'>
                               <Form.Group>
                                   <Form.Label>Username:</Form.Label>
                                   <Form.Control type='text' placeholder='username'  minLength='6' maxLength='25' size='10'/>
                               </Form.Group>
                               <br />
                               <Form.Group>
                                   <Form.Label>Password:</Form.Label>
                                   <Form.Control type='password' placeholder='password'/>
                               </Form.Group>
                           </Form>  
                           <br />
                           <br />
                           <Button>
                               Sign in
                           </Button>
                           <br />
                           <br />
                           <br />
                           <p> Don't have an account? Sign up for a new account <a href='/register'>here</a></p>   
                        </LoginForm>
                        </Col> 
                        <Col>
                            <BrandingImg src={IMG} />
                        </Col>
                    </Row>
                            
            </Content>
        </Wrapper>
    );
}

export default Login;