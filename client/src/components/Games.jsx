import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./Games.module.css";

const Games = () => {
    const [games, setGames] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [title, setTitle] = useState('');
    const [foundGames, setFoundGames] = useState(games)

    useEffect(() => {
        axios.get("http://localhost:8000/games")
            .then(res => {
                console.log(res.data);
                setGames(res.data)
                setFoundGames(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    const filter = (e) => {
        const keyword = e.target.value;
        setTitle(keyword);

        console.log("helo", keyword);

        if (keyword !== '') {
            const results = games.filter((game) => {
                return game.title.toLowerCase().includes(keyword.toLowerCase());
            })
            setFoundGames(results)

        } else {
            setFoundGames(games);
        }
    }

    return (
        <div className={styles.games_container}>
            <div className={styles.games_header}>
                <h1>Games</h1>
                <div className={styles.games_search}>
                    <input className={styles.search_bar}
                           type="text"
                        // value={keyword}
                           onChange={filter}
                           placeholder="Search for a game"
                    />
                    <input
                        type="submit"
                        value="Search"
                        // onClick={filter}
                    />
                </div>
            </div>
            <div className={styles.display_games}>
                {foundGames ? foundGames.map((games, idx) => {
                    return (
                        <div className={styles.game_card} key={idx}>
                            <img className={'img-fluid shadow-4'} src={games.image} alt="" height="250px" width="300px" />
                            <h6>{games.title}</h6>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Games;