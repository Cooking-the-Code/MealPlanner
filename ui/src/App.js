import React, { Component } from 'react';
import axios from 'axios';
import './css/App.scss';
import Landing from './pages/Landing';

const apiUrl = `api`; // `http://localhost:8080`; // 

class App extends Component {
  state = {
    users: []
  };

  async createUser() {
    await axios.get(apiUrl + '/user-create');
    this.loadUsers();
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    this.setState({
      users: res.data
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
