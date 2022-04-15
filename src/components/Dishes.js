import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink/CustomLink';

const Dishes = () => {
    return (
        <div>
            <Nav className='d-flex justify-content-center'>


                <CustomLink className='text-decoration-none mx-2 text-dark fs-4' to='/breakfast'>Breakfast</CustomLink>
                <CustomLink className='text-decoration-none mx-2 text-dark fs-4'  to='/lunch'>Lunch</CustomLink>

                <CustomLink className='text-decoration-none mx-2 text-dark fs-4'  to='/dinner'>Dinner</CustomLink>

            </Nav>
        </div>
    );
};

export default Dishes;