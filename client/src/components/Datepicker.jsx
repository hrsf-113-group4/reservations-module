import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';

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

const DatePicker = ({firstDay, date, handleCalendar, displayCalendar}) => (
  <div className='date dropdown'>
    <label htmlFor='date-picker'>Date</label>
    <Dropdown onClick={handleCalendar} >
      <option value={moment(date).format("MMM Do")}>{moment(date).format("ddd, M/d")}</option>
    </Dropdown>
    {displayCalendar === true ?  <Calendar firstDay={firstDay} date={date} /> : null}
  </div>
)

export default DatePicker;
