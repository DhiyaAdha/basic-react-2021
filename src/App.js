import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    // Menginisialisasi state untuk menyimpan data input dan nama
    this.state = {
      firstname: "", // Untuk menyimpan input "First name"
      lastname: "", // Untuk menyimpan input "Last name"
      name: "", // Untuk menyimpan nama yang akan ditampilkan
    };
  }

  // Fungsi ini akan dipanggil saat nilai input berubah
  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // Fungsi ini akan dipanggil saat tombol "Show" ditekan
  submitHandler = (e) => {
    e.preventDefault();
    const { firstname, lastname } = this.state;
    const name = `${firstname} ${lastname}`;

    // Mengubah state "name" menjadi nama yang dihasilkan dari input
    this.setState({ name });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Learn React JS</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        value={this.state.firstname}
                        onChange={this.changeHandler}
                        className="form-control"
                        id="firstname"
                        placeholder="Enter your firstname"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        value={this.state.lastname}
                        onChange={this.changeHandler}
                        className="form-control"
                        id="lastname"
                        placeholder="Enter your lastname"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Show
                    </button>
                  </form>
                </div>
                {/* Menampilkan nama di card-footer */}
                <div className="card-footer">
                  My name is {name ? name : "belum ngisi"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
