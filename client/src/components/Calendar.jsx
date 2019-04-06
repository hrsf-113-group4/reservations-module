import React from 'react';
import moment from 'moment';

const Calendar = ({firstDay, date}) => { 
  let shortWeekday = moment.weekdaysShort();
  let currentDay = moment(date).format('D');
  let weekdayHeader = shortWeekday.map(day => {
    return (
      <th key={day} className='weekday header'>
        {day}
      </th>
    );
  });
  
  let monthBuilder = () => {
    let previousMonth = [];
    for (var i = 0; i < firstDay(); i++) {
      previousMonth.unshift(
        <td className='weekday last-month'>{moment(date).startOf('month').subtract(i + 1, 'days').format('D')}</td>
      );
    };

    let monthDays = [];
    for (var j = 1; j <= moment(date).daysInMonth(); j++) {
      let chosenDay = j == currentDay ? 'chosen' : '';
      monthDays.push(
        <td className={`weekday month ${chosenDay}`}>
          {j}
        </td>
      );
    };

    let nextMonth = [];
    for (var k = 1; k < moment(date).add(1, 'months').startOf('month').endOf('week').format('d') - 1; k++) {
      nextMonth.push(
        <td className='weekday next-month'>
          {k}
        </td>
      )
    }
    
    let allDays = [...previousMonth, ...monthDays, ...nextMonth];
    let rows = [];
    let cells = [];

    allDays.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells); 
        cells = [];
        cells.push(row);
      }
      if (i === allDays.length - 1) {
        rows.push(cells);
      }
    });
    
    let fullMonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return fullMonth;
  };

  return (
    <div className='calendar'>
      <span id='last-month-button' role='button'>Last Month</span>
      <div id='current-month'>{moment(date).format('MMMM YYYY')}</div>
      <span id='next-month-button' role='button'>Next Month</span>
      <table className='calendar'>
        <thead><tr>{weekdayHeader}</tr></thead>
        <tbody>{monthBuilder()}</tbody>
      </table>
    </div>
  )
}

export default Calendar;
