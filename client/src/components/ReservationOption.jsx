import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
  margin-right: .5rem;
  margin-bottom: .5rem;
  display: inline-block;
  min-width: 72px;
  height: 32px;
  font-size: .875rem;
  background-color: #da3743;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  color: #fff;
  align-items: center;
  padding: 0 .25rem;
`;

const ReservationOption = ({value}) => (
  <div className='time button'>
    <Buttons id={value}>{value}</Buttons>
  </div>
)

export default ReservationOption;
