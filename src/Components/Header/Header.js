import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Navbar/NavBar';
import headerImg from '../../image-icon/header-image.png'
const Header = () => {
    return (
        <div id='home'>
            <Container>
            <NavBar></NavBar>
            <div className="content">
                <Row>
                    <Col md={5} style={{marginTop:"5%",padding:"20px"}}> 
                        <h1 id="headerTitle">Florence agency </h1>
                        <p style={{padding:"30px 0px",color:"#8e8e8e"}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ratione at neque adipisci, nihil veritatis consequuntur obcaecati placeat atque sint illo eveniet minima amet!</p>
                        <Button id="btnstyle">See Pricing</Button>
                    </Col>
                    <Col md={7} style={{textAlign:"right",padding:"20px",marginTop:"15px"}}>
                        <img src={headerImg} alt="" width ="90%"/>
                    </Col>
                </Row>
            </div>
            </Container>
        </div>
    );
};

export default Header;
