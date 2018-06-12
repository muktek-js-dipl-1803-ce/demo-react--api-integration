import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="user-card" data-id="berenice" data-gender="female">
        <img src="https://randomuser.me/api/portraits/women/11.jpg"/>
        <h5>Beverly</h5>
        <h6>NZ</h6>
        <ion-icon name="close"></ion-icon>
      </div>
    );
  }
}

export default User;
