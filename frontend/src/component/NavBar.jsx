import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const DefaultAStyle = `
    color: #333;
    font-weight: 500;
    margin-right: 1.5rem;
    transition: color 0.3s ease-in-out;
`
const DefaultAStyleHover = `
    color: #5c5cff;
`

const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`
const LogoCont = styled.div`
    > img {
        height: 50px;
    }
`
const NavItems = styled.div`
    >a { 
        ${DefaultAStyle} 
    }
    >a:hover {
        ${DefaultAStyleHover}
    }
`
const AuthSection = styled.div`
    a { 
        ${DefaultAStyle} 
    }
    >a:hover {
        ${DefaultAStyleHover}
    }
`


function NavBar() {
    return (
        <Container>
            <LogoCont>
                <img src="https://cdn.dribbble.com/users/38679/screenshots/6367097/rent-logo.png" alt="Parts Rental Company Logo" />
            </LogoCont>
            <NavItems>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Parts</a>
                <a href="#">Rentals</a>
                <a href="#">Contact Us</a>
            </NavItems>
            <AuthSection >
            <Link to="/login" >Login</Link>
                <Link to="/register" >Register</Link>
            </AuthSection>
        </Container>
    )
}

export default NavBar