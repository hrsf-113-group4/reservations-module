import React from 'react';
import moment from 'moment';

const ReservationTime = ({time}) => {
  const remainder = 30 - (time.minute() % 30);
 
  const dateTime = moment(time).add(remainder, "minutes").format("h:mm a");
  return (
    <div className='time dropdown'>
    <label htmlFor='reserve-time'>Time</label>
      <select id='reserve-time' defaultValue={dateTime}>
        <option value='12:00 am'>12:00 am</option>
        <option value='12:30 am'>12:30 am</option>
        <option value='1:00 am'>1:00 am</option>
        <option value='1:30 am'>1:30 am</option>
        <option value='2:00 am'>2:00 am'</option>
        <option value='2:30 am'>2:30 am</option>
        <option value='3:00 am'>3:00 am</option>
        <option value='3:30 am'>3:30 am</option>
        <option value='4:00 am'>4:00 am</option>
        <option value='4:30 am'>4:30 am</option>
        <option value='5:00 am'>5:00 am</option>
        <option value='5:30 am'>5:30 am</option>
        <option value='6:00 am'>6:00 am</option>
        <option value='6:30 am'>6:30 am</option>
        <option value='7:00 am'>7:00 am</option>
        <option value='7:30 am'>7:30 am</option>
        <option value='8:00 am'>8:00 am</option>
        <option value='8:30 am'>8:30 am</option>
        <option value='9:00 am'>9:00 am</option>
        <option value='9:30 am'>9:30 am</option>
        <option value='10:00 am'>10:00 am</option>
        <option value='10:30 am'>10:30 am</option>
        <option value='11:00 am'>11:00 am</option>
        <option value='11:30 am'>11:30 am</option>
        <option value='12:00 pm'>12:00 pm</option>
        <option value='12:30 pm'>12:30 pm</option>
        <option value='1:00 pm'>1:00 pm</option>
        <option value='1:30 pm'>1:30 pm</option>
        <option value='2:00 pm'>2:00 pm</option>
        <option value='2:30 pm'>2:30 pm</option>
        <option value='3:00 pm'>3:00 pm</option>
        <option value='3:30 pm'>3:30 pm</option>
        <option value='4:00 pm'>4:00 pm</option>
        <option value='4:30 pm'>4:30 pm</option>
        <option value='5:00 pm'>5:00 pm</option>
        <option value='5:30 pm'>5:30 pm</option>
        <option value='6:00 pm'>6:00 pm</option>
        <option value='6:30 pm'>6:30 pm</option>
        <option value='7:00 pm'>7:00 pm</option>
        <option value='7:30 pm'>7:30 pm</option>
        <option value='8:00 pm'>8:00 pm</option>
        <option value='8:30 pm'>8:30 pm</option>
        <option value='9:00 pm'>9:00 pm</option>
        <option value='9:30 pm'>9:30 pm</option>
        <option value='10:00 pm'>10:00 pm</option>
        <option value='10:30 pm'>10:30 pm</option>
        <option value='11:00 pm'>11:00 pm</option>
        <option value='11:30 pm'>11:30 pm</option>
      </select>
    </div>
  )
}

export default ReservationTime;