import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../config/logo.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    this.setState({ value: '' });
    e.preventDefault();
  }
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <img src={logo} alt="disney logo" style={{ width: '100%' }} />
          </li>
          <li>Featured</li>
          <li>Movies</li>
          <li>My Collection</li>
          <li>Discover</li>
          <li>Rewards</li>
          <form>
            <input
              type="text"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </form>
        </ul>
      </div>
    );
  }
}

export default Navbar;
