import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 1200px;
  max-width: 90%;
  display: flex;
  gap: 1rem;
  >*  {
    flex: 1;
  }
  @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  >h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  >p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  >button {
    max-width: 200px;
    border: none;
    background-color: #5c5cff;
    color: #fff;
    font-weight: 500;
    padding: 1rem 2rem;
    border-radius: 3rem;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  >button:hover {
    background-color: #fff;
    color: #5c5cff;
    border : 1px solid #5c5cff;
  }
`
const ImgContainer = styled.div`
  > img {
    max-width: 100%;
  }
`

function About() {
  return (
    <Container>
      <Wrapper>
        <Info class="about-us-text">
            <h2>About Us</h2>
            <p>A brief description of your company and its mission.</p>
            <button>Read More</button>
        </Info>
        <ImgContainer>
          <img src="http://www.probrewer.com/wp-content/uploads/2014/06/pumps-d6.jpg" alt="Parts Rental Company Team Photo" />
        </ImgContainer>
      </Wrapper>
    </Container>
  )
}

export default About