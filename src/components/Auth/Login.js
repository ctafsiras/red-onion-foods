import React from 'react';
import { Form, Button } from 'react-bootstrap';
import logo from "../../images/logo2.png";
import background from '../../images/bannerbackground.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigation=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
        


    }
    if(user){
        navigation('/')
    }
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <div className='w-25 mx-auto'>
                <div>
                    <img style={{ height: '60px' }} className='' src={logo} alt="" />
                    <Form onSubmit={handleLogin} className='w-100 mt-5'>
                        
                        <Form.Group className="mb-3 bg-danger text-primary">

                            <Form.Control name='email' type="email" placeholder="Email" />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>
                       
                        {loading && <p>Loading...</p>}
                        {error && <p>{error.message}</p>}
                        <Button className='w-100 mb-3' variant="danger" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className='' >New to Red Onion?</p>
                </div>
            </div></div>
    );
};

export default Login;