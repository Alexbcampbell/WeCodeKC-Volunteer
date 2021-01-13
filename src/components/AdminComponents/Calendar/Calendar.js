import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import axios from 'axios';
import { DateTime } from 'luxon';

//calendar imports
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import '@fullcalendar/daygrid';
import '@fullcalendar/interaction';
import '@fullcalendar/common';
import '@fullcalendar/timegrid/main.css';
import './calendarStyle.css';

//custom file import
import CreateEventDialog from './CreateEventDialog';

class Calendar extends Component {
  // calendarComponentRef = React.createRef(); not certain what this is doing but keeping it for now.

  state = {
    calendarWeekends: true,
    calendarEvents: [
      {
        title: '',
        start: '',
        end: '',
      },
    ],
    showForm: false,
    add: 'https://image.flaticon.com/icons/png/512/42/42953.png',
  };

  //grabbing all events and adding to event array
  //using a direct axios call to avoid convoluting data.
  componentDidMount() {
    axios
      .get('/api/event')
      .then((response) => {
        //cycling through entire array
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].recurring) {
          }
          this.setState({
            // adding new event to array
            calendarEvents: this.state.calendarEvents.concat({
              // creates a new event object
              title: response.data[i].event_title,
              // start: response.data[i].event_start,
              // end: response.data[i].event_end,
              rrule: {
                count: 1,
                freq: 'weekly',
                interval: 1,
                byweekday: [],
                dtstart: response.data[i].event_start,
              },
            }),
          });
        }
      })
      .catch((err) => {
        console.log('error in calendar get', err);
      });
    console.log(this.props.store.dateReducer);
  }
  //sending dates for event population modal
  sendDate = (date) => {
    const fixer = DateTime.fromISO(date);
    const fixedDate = fixer.toISODate();
    this.props.dispatch({
      type: 'GET_DATES',
      payload: fixedDate,
    });
    console.log(fixedDate);
  };

  showForm = (event) => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  handleDateClick = (argument) => {
    console.log('checking', argument);
    //argument is a built in object with date attached
    this.sendDate(argument.dateStr);
    if (
      window.confirm(
        'Would you like to add an event to ' + argument.dateStr + ' ?'
      )
    ) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: this.state.calendarEvents.title,
          start: this.state.calendarEvents.start,
          end: this.state.calendarEvents.end,
        }),
      });
    }
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar-top">
          <button onClick={this.gotoPast}>go to a date in the past</button>
        </div>

        <CreateEventDialog />
        <div className="calendar-proper">
          <FullCalendar
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prevYear,nextYear,prev,next,today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              rrulePlugin,
            ]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Calendar);
