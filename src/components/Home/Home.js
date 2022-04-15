import React from 'react';
import { Outlet } from 'react-router-dom';
import Dishes from '../Dishes';
import TopHeader from './TopHeader';

const Home = () => {
    return (
        <div>
           <TopHeader></TopHeader>
           <Dishes></Dishes>
           <Outlet/>
        </div>
    );
};

export default Home;