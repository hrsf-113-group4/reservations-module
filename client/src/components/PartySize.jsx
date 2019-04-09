import React from 'react';
import styled from 'styled-components';

const Dropdown = styled.select`
  cursor: pointer;
  position: relative;
  font-family: inherit;
  background-color: #ffffff;
  font-size: .875rem;
  display: block;
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border-bottom: 1px solid #d8d9db;
  outline: none;
`;

const Label = styled.label`
font-size: .875rem;
font-weight: 500;
padding-bottom: .25rem;
display: block;
`;


const PartySize = (props) => (
  <div>
    <Label>Party Size</Label>
    <Dropdown defaultValue='2'>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      <option value='6'>6</option>
      <option value='7'>7</option>
      <option value='8'>8</option>
      <option value='9'>9</option>
      <option value='10'>10</option>
      <option value='11'>11</option>
      <option value='12'>12</option>
      <option value='13'>13</option>
      <option value='14'>14</option>
      <option value='15'>15</option>
      <option value='16'>16</option>
      <option value='17'>17</option>
      <option value='18'>18</option>
      <option value='19'>19</option>
      <option value='20'>20</option>
    </Dropdown>
  </div>
)

export default PartySize;
