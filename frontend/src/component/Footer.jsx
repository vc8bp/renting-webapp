import React from 'react'
import styled from 'styled-components'

const Conainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`

function Footer() {
  return (
    <Conainer>
      <p>&copy; 2023 Parts Rental Company. All rights reserved.</p>
    </Conainer>
  )
}

export default Footer