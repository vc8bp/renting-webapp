import React from 'react'
import styled from 'styled-components'
import SingleProduct from './SingleProduct'

const Container = styled.div`
  background-color: ${p => p.back ? p.back : "#fff"};
  padding: 50px 0;

  >div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`

const ViewMore = styled.p`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  :hover {
    color: #5c5cff;
    text-decoration: underline;
    cursor: pointer;
  }
`

function Products({title, backgroud}) {
  return (
    <Container back={backgroud}>
      <Title>{title}</Title>
      <div>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
      </div>
      <ViewMore>View More {title}</ViewMore>
    </Container>
  )
}

export default Products