import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="user-card" data-id={this.props.userId}>
        <img src={this.props.userImg}/>
        <h5>{this.props.userName}</h5>
        <h6>{this.props.userNat}</h6>
        <ion-icon name="close" ></ion-icon>
      </div>
    );
  }
}

export default User;
