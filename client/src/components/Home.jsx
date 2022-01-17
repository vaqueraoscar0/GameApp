import React, {useEffect, useState} from 'react';
import CarouselComponent from "./CarouselComponent";
import style from './Home.module.css';
import axios from 'axios';


const Home = () => {
    return (
        <div>
            <center>
                <br/><br/><br/>
                <CarouselComponent/>
                <br/><br/><br/><p>Something</p>
                <br/><br/><br/><p>Something</p>
                <br/><br/><br/><p>Something</p>
            </center>
        </div>
    )
}

export default Home;
