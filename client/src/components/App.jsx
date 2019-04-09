import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import axios from 'axios';
import PartySize from './PartySize.jsx'
import FindReservation from './FindReservation.jsx';
import ReservationOption from './ReservationOption.jsx';
import ReservationTime from './ReservationTime.jsx';
import DatePicker from './DatePicker.jsx';

const Wrapper = styled.div`
  display: block;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(153,153,153,.4);
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const Title = styled.h3`
  justify-content: center;
  height: 100%;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  flex-direction: column;
  border-bottom: 1px solid #d8d9db;
  text-align: center;
`;

const ButtonSpace = styled.div`
  justify-content: center;
  text-align: center;
  margin: 1rem auto 0;
  overflow: hidden;
  width: 100%;

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: 'w3ze0',
      date: moment(),
      time: moment(),
      party: 2,
      buttons: 'reservation',
      displayCalendar: false,
      reservations: [],
    }
    this.firstDayOfTheMonth = this.firstDayOfTheMonth.bind(this);
    this.handleCalendar = this.handleCalendar.bind(this);
    this.getReservations = this.getReservations.bind(this);
  }

  handleCalendar() {
    this.setState({
      displayCalendar: !this.state.displayCalendar,
    });
  }

  firstDayOfTheMonth() {
    let date = this.state.date;
    let firstDay = moment(date).startOf('month').format('d');
    return firstDay;
  }

  getReservations() {
    var url = '/date/' + this.state.date.format('YYYY-MM-DD') + 'T07:00:00Z/' + this.state.restaurantId + '/' + this.state.party;
    axios.get(url, {})
    .then( (response) => {
      this.setState({
        buttons: 'times',
        reservations: response.data
      })
    })
    .catch( (error) => {
      console.error(error);
    })
  }

  renderButtons() {
    const {buttons} = this.state;
    if (buttons === 'reservation') {
      return <FindReservation getReservations={this.getReservations} />
    } else if (buttons === 'times') {
      this.state.reservations.map( (availableTime, i) => {
        return <ReservationOption value={availableTime.time} key={i}/>
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Make a reservation</Title>
        <div className='party'><PartySize /></div>
        <div className='reservation-date'><DatePicker firstDay={this.firstDayOfTheMonth} date={this.state.date} handleCalendar={this.handleCalendar} displayCalendar={this.state.displayCalendar}/></div>
        <div className='reservation-time'><ReservationTime time={this.state.time}/></div>
        <ButtonSpace>
          {this.renderButtons()}
        </ButtonSpace>
        <div className='reservation-info'></div>
      </Wrapper>
    )
  }
}

export default App;
