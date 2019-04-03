import React from 'react';
import PartySize from './PartySize.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '4/2/2019',
      time: '5:00 pm',
      party: 2,
    }
  }

  render() {
    return (
      <div>
        <div className='party'><PartySize /></div>
        <div className='reservation-date'></div>
        <div className='reservation-time'></div>
        <div className='find-a-table'></div>
        <div className='reservation-info'></div>
      </div>
    )
  }
}

export default App;