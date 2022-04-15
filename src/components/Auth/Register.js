import React from 'react';
import { Form, Button } from 'react-bootstrap';
import logo from "../../images/logo2.png";
import background from '../../images/bannerbackground.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const handleRegister=e=>{
          e.preventDefault()
          const name=e.target.name.value;
          const email=e.target.email.value;
          const password=e.target.password.value;
          const confirmPassword=e.target.confirmPassword.value;
          console.log(name, email, password, confirmPassword);
          if (password===confirmPassword) {
            createUserWithEmailAndPassword(email, password)
          }
          

      }
    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <div className='w-25 mx-auto'>
        <div>
            <img style={{ height: '60px' }} className='' src={logo} alt="" />
            <Form onSubmit={handleRegister} className='w-100 mt-5'>
                <Form.Group className="mb-3">

                    <Form.Control name='name' type="text" placeholder="Name" />

                </Form.Group>
                <Form.Group className="mb-3 bg-danger text-primary">

                    <Form.Control name='email' type="email" placeholder="Email" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">

                    <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" />
                </Form.Group>
               {error&&<p>{error.message}</p>}
                <Button className='w-100 mb-3' variant="danger" type="submit">
                    Register
                </Button>
            </Form>
            <p className='' >Already have an Account?</p>
        </div>
    </div></div>
    );
};

export default Register;