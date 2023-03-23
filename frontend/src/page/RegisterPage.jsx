import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7fafc;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1a202c;
`;

const Form = styled.form`
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2.5rem 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: #f2f2f2;
  color: #444;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }

`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
const Redirec = styled.p`
  margin: 1rem 0;
`


const RegisterPage = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    cpass: ""
  });

  const handleInputChange = (e) => {
    const {value, name} = e.target
    setInputValue(p => ({...p, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to submit form data to backend
  };

  return (
    <Wrapper>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Full Name"
          value={inputValue.name}
          onChange={handleInputChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={inputValue.email}
          onChange={handleInputChange}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={inputValue.password}
          onChange={handleInputChange}
          required
        />
        <Input
          name="cpass"
          type="password"
          placeholder="Confirm Password"
          value={inputValue.cpass}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Register</Button>
      </Form>
      <Redirec>Already have an Account?<Link to="/login"> Login</Link></Redirec>
    </Wrapper>
  );
};

export default RegisterPage;
