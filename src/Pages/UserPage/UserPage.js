import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EventListItem from '../../components/EventListItem/EventListItem';

//custom file imports
import './user.css';
import ProfileInfoPanel from './ProfileInfoPanel';
import UserPageEdit from '../../components/UserPageEdit/UserPageEdit';

//custom MATERIAL-UI imports
import { Grid, Typography, Container } from '@material-ui/core';

class UserPage extends Component {
  state = {
    edit: false,
    event: '',
    name: 'Chris',
    role: 'A dude',
    zipcode: '71101',
    phone: '318-555-1029',
    email: 'adude@gmail.com',
    skills: 'C#, Python, ',
    image:
      'https://wecodekc.s3.us-east-2.amazonaws.com/default-profile-icon-16.jpg',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USER_EVENTS',
    });
    this.props.dispatch({ type: 'GET_SKILL' });
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit,
    });
  };

  render() {
    const userEvent = this.props.store.userEventReducer.map((item, index) => {
      return (
        <Grid item sm={12} md={4} lg={4}>
          <EventListItem
            key={index}
            event={item}
            index={index}
            {...this.props}
          />
        </Grid>
      );
    });
    return (
      <div className="user-container">
        <Container>
          <Grid container justify="center">
            <Grid item lg={4} md={4} sm={4} xs={12}>
              {this.state.edit ? (
                <UserPageEdit edit={this.handleEdit} />
              ) : (
                <ProfileInfoPanel edit={this.handleEdit} />
              )}
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12}>
              <div className="profile-area">
                <Typography gutterBottom>
                  {this.props.store.user.username}'s Events
                </Typography>
                {userEvent}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
