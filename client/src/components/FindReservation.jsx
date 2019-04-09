import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
display: inline-block;
cursor: pointer;
padding: .75rem 1rem;
text-decoration: none;
background-color: #da3743;
color: #fff;
font-weight: 500;
text-align: center;
box-sizing: border-box;
border: none;
width: 18rem;
`;

const FindReservation = (props) => (
  <div className='reserve button'>
    <Button>Find a Table</Button>
  </div>
)

export default FindReservation;
