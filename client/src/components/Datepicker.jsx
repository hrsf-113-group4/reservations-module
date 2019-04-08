import React from 'react';
import moment from 'moment';
import Calendar from './Calendar.jsx';

const DatePicker = ({firstDay, date, handleCalendar, displayCalendar}) => (
  <div className='date dropdown'>
    <label htmlFor='date-picker'>Date</label>
    <select id='date-picker' onClick={handleCalendar} >
      <option value={moment(date).format("MMM Do")}>{moment(date).format("ddd, M/d")}</option>
    </select>
    {displayCalendar === true ?  <Calendar firstDay={firstDay} /> : null}
    {/* Date selector looks like a drop down
    date showed defaults to today
    when clicked it opens to a calendar
    date selected will appear on drop down
    */}
  </div>
)

export default DatePicker;
