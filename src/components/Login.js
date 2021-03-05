import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="login">
        <img
          src="https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg"
          alt="Robinhood"
        />
        <div className="form-container">
          <form onSubmit={this.onSubmit}>
            <header>
              <h1>Welcome to Crypto-Tracker</h1>
            </header>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={this.state.username}
              id="username"
              type="text"
              onChange={this.onChange}
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={this.state.password}
              id="password"
              type="password"
              onChange={this.onChange}
            />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
