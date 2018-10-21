import React from 'react';
import './Queue.css';

class Queue extends React.Component {
  convertFC() {
    const firstFour = this.props.challenger.fc.substring(0,4);
    const middleFour = this.props.challenger.fc.substring(4,8);
    const lastFour = this.props.challenger.fc.substring(8,12);
    const hyphen = '-'
    const formattedFC = firstFour + hyphen + middleFour + hyphen + lastFour;
    return formattedFC;
  }

  render() {
    const challenger = this.props.challenger;
    return (
      <div className="row show-grid">
        <div className="col-xs-12">
          <div className="challenger-details">
            <div className="box">
              <div className="row">
                <div className="col-xs-12">
                  <p className="friend-code">FC: {this.convertFC()}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p className="username">{challenger.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Queue;
