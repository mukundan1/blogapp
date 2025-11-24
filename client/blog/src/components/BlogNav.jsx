// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav = () => {
    return (
        <div>
            <Navbar style={{
                backgroundColor:"#A3C1D4"
            }}>
                <Navbar.Brand href="/" style={{color:"white", marginLeft:"10px"}}>Blog</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="blogs" style={{color:"white"}}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="users/register" style={{color:"white"}}>
                            Register
                        </Nav.Link>
                        <Nav.Link href="users/login" style={{color:"white"}}>
                            Login
                        </Nav.Link>
                        {/* <Nav.Link href="#contact" style={{color:"white"}}>
                            Contact
                        </Nav.Link> */}
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="ml-auto"  />
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default BlogNav;