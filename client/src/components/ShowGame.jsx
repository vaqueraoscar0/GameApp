import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import styles from './ShowGame.module.css';

const ShowGame = () => {
    const [game, setGame] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/games/${id}`)
            .then(res => {
                console.log(res.data);
                setGame(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={styles.show_game_container}>
            <div>
                <img className={styles.show_game_image} src={game.image} alt={`${game.title} banner`} />
                <h1 className={styles.show_game_title}>{game.title}</h1>
            </div>
            <div className={styles.show_game_description}>
                <p>{game.description}</p>
            </div>
        </div>
    )
}

export default ShowGame;