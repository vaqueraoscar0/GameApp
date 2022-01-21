import "../App.css";
import io from "socket.io-client";
import {useState} from "react";
import ChatCom from "./ChatCom";
import ChatRoom from "./ChatRoom";

const socket = io.connect("http://localhost:8000");

const Chat = () =>{
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () =>{
        if(username !== "" && room !== ""){
            socket.emit("join_room", room);
            setShowChat(true);
        }
    }

    return (
        <div className="Chat">
            {!showChat ? (
                <div className="joinChatContainer">
                    <div className={'JoinChatBox'}>
                        <div className={'JoinChat'}>
                            <h3>Join A Chat</h3>
                            <input
                                type="text"
                                placeholder="John..."
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            /><br/>
                            <input
                                type="text"
                                placeholder="Room ID..."
                                onChange={(event) => {
                                    setRoom(event.target.value);
                                }}
                            /><br/><br/>
                            <button onClick={joinRoom}>Join A Room</button>
                        </div>
                    </div>
                </div>
                ) : (
                    <ChatCom socket={socket} username={username} room={room} />
                )}
        </div>
    );
}

export default Chat;