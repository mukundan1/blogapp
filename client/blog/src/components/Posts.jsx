// Posts.js

import React from "react";
import Post from "./Post";
// import Post from "./Post";
// import Post from "./Post";
// import Post from "./Post";
import { Container, Row, Col, Card } from 'react-bootstrap';


const Posts = () => {
    return (
        <Container>
            <Row className="justify-content-between">
                <Col md={8} className="mb-4">
                    <Post />
                </Col>
                <Col md={8} className="mb-4">
                    <Post />
                </Col>
                <Col md={8} className="mb-4">
                    <Post />
                </Col>
                <Col md={8} className="mb-4">
                    <Post />
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;