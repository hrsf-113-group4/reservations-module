import React from 'react';
import moment from 'moment';
import PartySize from './PartySize.jsx'
import FindReservation from './FindReservation.jsx';
import ReservationOption from './ReservationOption.jsx';
import ReservationTime from './ReservationTime.jsx';
import DatePicker from './DatePicker.jsx';
import Calendar from './Calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      time: moment(),
      party: 2,
      buttons: 'reservation',
      displayCalendar: false,
    }
    this.firstDayOfTheMonth = this.firstDayOfTheMonth.bind(this);
    this.handleCalendar = this.handleCalendar.bind(this);
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

  renderButtons() {
    const {buttons} = this.state;

    if (buttons === 'reservation') {
      return <FindReservation />
    } else if (buttons === 'times') {
      return <ReservationOption />
    } 
  }

  render() {
    return (
      <div>
        <h2 className='title'>Make a reservation</h2>
        <div className='party'><PartySize /></div>
        <div className='reservation-date'><DatePicker firstDay={this.firstDayOfTheMonth} date={this.state.date} handleCalendar={this.handleCalendar} displayCalendar={this.state.displayCalendar}/></div>
        <div className='reservation-time'><ReservationTime time={this.state.time}/></div>
        <div className='find-a-table'>
          {this.renderButtons()}
        </div>
        <div className='reservation-info'></div>
      </div>
    )
  }
}

export default App;