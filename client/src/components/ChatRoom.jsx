import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from "./Home.module.css";


const ChatRoom = () =>{

    return (
        <div>
            <Container fluid={true}>
                <Row >
                    <Col className={style.box1}>
                        <div>
                            <center><br/><h5>Chats</h5></center>
                            {/*<div className={style.box}></div>*/}
                        </div>
                    </Col>
                    <Col xs={6} className={style.box2}>
                        <div>
                            <center><br/><h5>Messages</h5></center>
                            {/*<div className={style.box}></div>*/}
                        </div>
                    </Col>
                    <Col  className={style.box3}>
                        <div>
                            <center><br/><h5>Online now</h5></center>
                            {/*<div className={style.box}></div>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
            <br/><br/><br/>
        </div>
    );
}

export default ChatRoom;