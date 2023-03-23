import React from 'react'
import styled from 'styled-components'

const SharedInput = `
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const Container = styled.div`
  background-color: #eee;
  padding: 50px;
  >h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`
const Form = styled.form`
  margin: auto;
  width: 700px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  >*{
    width: 100%;
  }
  >label {
    margin-bottom: 10px;
  }
`
const Input = styled.input`
  ${SharedInput}
`
const TextArea = styled.textarea`
  ${SharedInput}
`
const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  :hover {background-color: #555;}
`

function ContectUs() {
  return (
    <Container class="contact-us">
      <h2>Contact Us</h2>
      <Form action="#" method="POST">
        <label for="name">Name:</label>
        <Input type="text" id="name" name="name" required />
        <label for="email">Email:</label>
        <Input type="email" id="email" name="email" required />
        <label for="message">Message:</label>
        <TextArea id="message" name="message" required></TextArea>
        <Button type="submit" value="Send" >Submit</Button>
      </Form>
    </Container>
  )
}

export default ContectUs