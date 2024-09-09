import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css'
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { signOut } from 'firebase/auth';
import { Auth } from '../config/firebase';


function Header() {
    const { userName } = useContext(UserContext) 

    const handleSignOut = async () => {
        await signOut(Auth)    
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src="/img/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        {
                            !userName ? (
                                <>
                                    <Nav className="m-auto">
                                        <Nav.Link as={Link} to='/' className='header_nav'>Home</Nav.Link>
                                        <Nav.Link href="#pricing" className='header_nav'>About</Nav.Link>
                                        <Nav.Link href="#pr" className='header_nav'>Section</Nav.Link>
                                    </Nav>
                                    <Nav>
                                        <Nav.Link as={Link} to='/login' className='header_nav'><i className="bi bi-box-arrow-in-right" style={{ marginRight: "3px" }}></i>Login</Nav.Link>
                                        <Nav.Link as={Link} to='/register' className='header_nav' >
                                            <i className="bi bi-r-square " style={{ marginRight: "3px" }} ></i>
                                            Register
                                        </Nav.Link>
                                    </Nav>
                                </>
                            ) :
                                (
                                    <Nav className='ms-auto'>
                                        <Nav.Link  className='header_nav'><i className="bi bi-person-circle" style={{ marginRight: "3px" }} ></i>
                                            {userName}</Nav.Link>
                                        <Nav.Link as={Link} to='/register' className='header_nav' onClick={handleSignOut}>
                                        <i className="bi bi-box-arrow-left" style={{ marginRight: "3px" }} ></i>
                                            Logout
                                        </Nav.Link>
                                    </Nav>
                                )
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
