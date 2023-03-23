import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  margin-bottom: 30px; 
  >img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
  } 
  >h3 {
    font-size: 24px;
    margin-bottom: 10px;
  } 
  >p {
    font-size: 16px;
    margin-bottom: 20px;
  } 
  >button {
    width: 100%;
    border: none;
    background-color: #0077c2;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
  } 
  >button:hover {
    background-color: #005ea3;
  }
  
`

function SingleProduct() {
  return (
    <Container>
      <img src="http://www.probrewer.com/wp-content/uploads/2014/06/pumps-d6.jpg" alt="service 1" />
      <h3>service 1 Name</h3>
      <p>Description of part 1.</p>
      <button>Rent Now</button>
    </Container>
  )
}

export default SingleProduct