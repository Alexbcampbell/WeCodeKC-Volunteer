import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//import for date/time config
import { DateTime } from 'luxon';

//MATERIAL-UI IMPORTS
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class EventListItem extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_EVENTS',
      payload: this.props.store.events,
    });
  }

  handleCLickDetails = (event) => {
    this.props.history.push(`/event/details/${this.props.event.id}`);
  };

  render() {
    const { event } = this.props;
    const date = DateTime.fromISO(event.event_start);
    const humanDate = date.toLocaleString(DateTime.DATETIME_MED);
    return (
      <Card>
        {event.event_type === 1 ? (
          <CardHeader
            avatar={<Avatar>C</Avatar>}
            title={event.event_title}
            subheader={humanDate}
          />
        ) : (
          <CardHeader
            avatar={<Avatar>E</Avatar>}
            title={event.event_title}
            subheader={humanDate}
          />
        )}

        <CardContent>
          {event.event_type === 1 ? (
            <img
              src={'https://wecodekc.s3.us-east-2.amazonaws.com/_W4A0876-1.jpg'}
              alt="course"
            />
          ) : (
            <img
              src={'https://wecodekc.s3.us-east-2.amazonaws.com/_W4A0816-1.jpg'}
              alt="event"
            />
          )}

          {/* <CardMedia
              image="https://wecodekc.s3.us-east-2.amazonaws.com/_W4A0816-1.jpg"
              title="Event"
            /> */}
        </CardContent>

        <CardActions>
          <center>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={this.handleCLickDetails}
            >
              Details
            </Button>
          </center>
        </CardActions>
      </Card>
    );
  }
}

export default connect()(withRouter(EventListItem));
