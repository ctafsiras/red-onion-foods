import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Navbar bg="white" variant="white" className='text-dark'>
                    <Container className='d-flex justify-content-between'>
                        <Navbar.Brand as={Link} to="/">
                            <img style={{ height: '28px' }} src={logo} alt="" />
                        </Navbar.Brand>
                        <Nav className="">
                            <Nav.Link as={Link} to="/"><ShoppingCartIcon style={{ height: '25px' }} className='text-dark'></ShoppingCartIcon></Nav.Link>
                            <Nav.Link as={Link} to="login" className='text-dark fw-bold'>Log In</Nav.Link>
                            <Nav.Link as={Link} to="register" className='bg-danger rounded py-2 px-4 text-white fw-bold'>Sign Up</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;