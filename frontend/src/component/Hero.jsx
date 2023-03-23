import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #5c5cff;
    color: #fff;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 1200px;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
    >* {
        flex: 1;
    }
`
const ImgWrapper = styled.div`
    >img {width: 100%}
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    >h1 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
    >button {
        border: none;
        background-color: #fff;
        color: #5c5cff;
        font-weight: 500;
        padding: 1rem 2rem;
        border-radius: 3rem;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
    >button:hover {
        background-color: #5c5cff;
        color: #fff;
        border : 1px solid #fff;
    }
`

function Hero() {
  return (
    <Container >
      <Wrapper >
        <ImgWrapper class="banner-img-container">
          <img src="https://tiimg.tistatic.com/fp/1/006/819/submersible-pumps-motor-spare-parts-515.jpg" alt="Parts Rental Company Banner Image" />
        </ImgWrapper>
        <InfoContainer class="banner-text">
          <h1>Rent Your Parts Now</h1>
          <button> Rent Now</button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

export default Hero;
