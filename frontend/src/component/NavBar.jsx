import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { logout } from '../redux/userSlice'

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
    height: 80px;
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
    >* { 
        ${DefaultAStyle} 
    }
    >*:hover {
        ${DefaultAStyleHover}
    }
`
const AuthSection = styled.div`
    p {
        cursor: pointer;
    }
    * { 
        ${DefaultAStyle} 
    }
    >*:hover {
        ${DefaultAStyleHover}
    }
`


function NavBar() {
    const dispatch = useDispatch()
    const user = useSelector(s => s.user.user?.token);
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
                {user ? <p onClick={() => dispatch(logout())}>Logout</p> :
                <>
                    <Link to="/login" >Login</Link>
                    <Link to="/register" >Register</Link>
                </>
                }
            </AuthSection>
        </Container>
    )
}

export default NavBar