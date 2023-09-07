import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  async getUser() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      this.setState({
        user: response.data,
      });
    } catch (error) {
      console.error("Error saat mengambil data pengguna:", error);
    }
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const {user} = this.state;
    return (
      <div>
        <h1>Nama saya adalah {user.name}</h1>
        <h2>Username saya adalah {user.username}</h2>
        <h2>Email saya adalah {user.email}</h2>
        
      </div>
    );
  }
}

export default App;
