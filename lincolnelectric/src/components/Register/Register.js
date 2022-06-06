import React, { useState, useEffect } from 'react';
import { Wrapper, Content, RegisterForm } from './Register.styles';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

const Register = () => {
    return(
        <Wrapper> 
            <Content>
            {/* <Container fluid></Container> */}
            <Container fluid>
                <Row> 
                    <h1>Register for a New Account</h1>
                </Row>
                <Form>
                    <Row>
                        <Col sm={6} md={3} lg={3}> 
                            <Form.Group>
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <Form.Group>
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                        {/* <Col sm={12} md={3} lg={{span: 3}}>
                            <Form.Group>
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type='text'/>
                                <Form.Text> Pick a unique username or use your email address.</Form.Text>
                            </Form.Group>
                        </Col> */}
                    </Row>
                    <br>
                    </br>
                    <Row>
                        <Col sm={10} md={6} lg={6}>
                         <h3> Address to tie to billing: </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={6}>  
                            <Form.Group>
                                <Form.Label>Street Address:</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <Form.Group>
                                <Form.Label>Apt/PO Box: (optional)</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={3} lg={3}>
                            <Form.Group>
                                <Form.Label>City:</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                        <Col sm={2} md={1} lg={1}>
                            <Form.Group>
                                <Form.Label>State:</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                        <Col sm={4} md={2} lg={2}>
                            <Form.Group>
                                <Form.Label>Zip Code:</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                      
                    </Row>
                    <Row>
                        <Col sm={4} md={2} lg={2}>
                            <Form.Group>
                                <Form.Label>Phone Number:</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                        <Col sm={8} md={4} lg={4}>
                            <Form.Group>
                                <Form.Label>Email Address:</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={12}>
                            <Form.Group>
                                <Form.Check className='formCheckbox' type='checkbox' label='Sign up for Paperless Billing'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Group>
                                <Form.Check className='formCheckbox' type='checkbox' label='Sign up for billing reminders via text'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/>
                    {/* <Row>
                        <Col sm={10} md={6} lg={6}>
                         <h3> Account Details: </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4} lg={{span: 4}}>
                            <Form.Group>
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type='text' placeholder='Pick a unique username or use email address'/>
                            </Form.Group>
                        </Col>
                    </Row> */}
                    <Row> 
                        <Col sm={12} md={3} lg={{span: 3}}>
                            <Form.Group>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type='text' placeholder='Password'/>
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={3} lg={{span: 3}}>
                            <Form.Group>
                                <Form.Label>Confirm Password:</Form.Label>
                                <Form.Control type='text' placeholder='Password'/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <br/>
                <br/>
                <Row>
                    <Col sm={4} md={3} lg={{span: 3, offset: 4}}>
                        <Button>
                            Create Account
                        </Button>
                    </Col>
                </Row>
                <br/>
                <br/>
            </Container>
            {/* <Container>
           
            <Row>  
                    <Form className='formGroup'>
                    <Col>
                        <Form.Group>
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                    </Col>
                    </Form>    
            </Row>                   
            </Container> */}
            </Content>          
        </Wrapper>
    );
}


export default Register;