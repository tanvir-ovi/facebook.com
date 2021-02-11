import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password:''
    }
  }

  onInputChange = (event) => {
    switch (event.target.name)  {
      case 'email':
        this.setState({email:event.target.value})
        break;
      case 'password':
        this.setState({password:event.target.value})
        break;
      default:
        return;
    }
  }

  onSubmit = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password:this.state.password
      })
    })
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-md-7">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="w-50" alt=""/>
            <h3>Facebook helps you connect and share with the people in your life.</h3>
          </div>
          <div className="col-md-5">
            <form className="login-form" action="#">
              <div className="mb-3">
                <input onChange={this.onInputChange} name="email" type="text" className="form-control" placeholder="Email address or phone number"
                  required />
              </div>
              <div className="mb-3">
                <input onChange={this.onInputChange} name="password" type="password" className="form-control" placeholder="Password"
                  required />
              </div>
              <button onClick={this.onSubmit} type="button" className="btn btn-custom btn-lg btn-block mt-3">Login</button>
              <div className="text-center pt-3 pb-3">
                <a href="https://www.facebook.com" className="">Forgotten password?</a>
                <hr/>
                <button type="button" className="btn btn-success btn-lg mt-3">Create New Account</button>
              </div>
            </form>
            <p className="pt-3 text-center"><b>Create a Page</b> for a celebrity, band or business.</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
}

export default App;
