import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const CalendarBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  user-select: none;
  flex-direction: row;
  padding: 1rem 0;
  margin: 0 auto;
  border: 1px solid #d8d9db;
  background-color: #f1f2f4;
  width: 100%;
`;

const CalendarTable = styled.div`
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  user-select: none;
  margin: 0 1rem;
  width: 256px;
`;

const MonthButton = styled.span`
  display: flex;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 6px 8px;
  background-image: url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5….5 0 0 0 .71 0L4.39 5.1l.71-.71a.5.5 0 0 0-.01-.71z'/%3E%3C/g%3E%3C/svg%3E);
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: 1px solid #d8d9db;
  border-radius: 50%;
  box-sizing: border-box;
  right: 1rem;
`;

const LastMonthButton = styled.span`
  display: flex;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 6px 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5.24 8.07'%3E%3Cg%3E%3Cpath style='fill:%23E1E1E1' d='M5.09 3.68L4.39 3 1.56.15a.5.5 0 0 0-.71 0l-.7.7a.5.5 0 0 0 0 .71L2.62 4 .15 6.51a.5.5 0 0 0 0 .71l.71.71a.5.5 0 0 0 .71 0L4.39 5.1l.71-.71a.5.5 0 0 0-.01-.71z'/%3E%3C/g%3E%3C/svg%3E");
  cursor: default;
  width: 32px;
  height: 32px;
  border: 1px solid #d8d9db;
  border-radius: 50%;
  box-sizing: border-box;
  pointer-events: none;
  left: 1rem;
`;

const Heading = styled.div`
  display: table-caption;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 700;
`;

const TableCell = styled.td`
  display: table-cell;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  border: 1px solid #d8d9db;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  font-weight: 500;
  background-clip: padding-box;
  line-height: 33px;
`;

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
        <TableCell className='weekday last-month'>{moment(date).startOf('month').subtract(i + 1, 'days').format('D')}</TableCell>
      );
    };

    let monthDays = [];
    for (var j = 1; j <= moment(date).daysInMonth(); j++) {
      let chosenDay = j == currentDay ? 'chosen' : '';
      monthDays.push(
        <TableCell className={`${chosenDay}`}>
          {j}
        </TableCell>
      );
    };

    let nextMonth = [];
    for (var k = 1; k < moment(date).add(1, 'months').startOf('month').endOf('week').format('d') - 1; k++) {
      nextMonth.push(
        <TableCell className='weekday next-month'>
          {k}
        </TableCell>
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
    <CalendarBase>
      <CalendarTable>
        <LastMonthButton id='last-month-button' role='button'></LastMonthButton>
        <Heading>{moment(date).format('MMMM YYYY')}</Heading>
        <MonthButton id='next-month-button' role='button'></MonthButton>
        <table className='calendar'>
          <thead><tr>{weekdayHeader}</tr></thead>
          <tbody>{monthBuilder()}</tbody>
        </table>
      </CalendarTable>
    </CalendarBase>
  )
}

export default Calendar;
