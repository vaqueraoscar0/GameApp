import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./Post.module.css";
import {Link, useHistory, useParams} from 'react-router-dom';

const Post = () => {
    const history = useHistory();

    const [title, setTitle] = useState({})
    const [body, setBody] = useState({})
    const { id } = useParams();

    useEffect(() => {

    }, []);

    const createNewPost = () =>{
        const user = localStorage.getItem("User");

        const newPost = {
            title: title,
            body: body,
            username: "",
            user: user,
            game: id

        }

        axios.post("http://localhost:8000/post/new", newPost, { withCredentials: true })
            .then(res => {
                console.log("New Post was created")
            })
            .catch(err => {
                console.log(err.response);
                console.log(err.response.data)
            })

        history.push(`/forum/${id}`);
    }

    // const sortedPosts = posts.sort((a, b) => b.createdAt - a.createdAt);
    // console.log(sortedPosts)

    return (
        <div className={styles.post_container}>

            <div className={styles.post_body}>
                <h1>New Post</h1><br/><br/>
                <form>
                    <div>
                        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
                    </div>
                    <div><br/>
                        <textarea type="text" name="body" onChange={(e) => setBody(e.target.value)} placeholder="Write your post..." rows="4" cols="40"/>
                    </div><br/>
                    <input onClick={createNewPost} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Post;