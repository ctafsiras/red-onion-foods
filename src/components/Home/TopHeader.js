import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import bannerbackground from '../../images/bannerbackground.png'

const TopHeader = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerbackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', height: '450px', width: '100%' }} className='d-flex justify-content-center align-items-center'>
        
         <div>
         <h2 className='d-flex justify-content-center align-items-center'>Best food waiting for your belly</h2>
         <Form className="d-flex justify-content-center">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 w-50 rounded-end rounded-pill"
          aria-label="Search"
        />
        <Button variant="outline-success" className='bg-danger text-white rounded-start rounded-pill py-2 px-4'>Search</Button>
      </Form>
         </div>
        </div>
    );
};

export default TopHeader;