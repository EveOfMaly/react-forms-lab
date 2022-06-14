// import React from "react";

import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "", 
      submittedData: []
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()

    let formData = {
      username: this.state.username,
      password: this.state.password
    }

    if (this.state.username && this.state.password !== ""){
      this.props.handleLogin(formData)
      let dataArray = this.state.submittedData.concat(formData);
      this.setState({ submittedData: dataArray });
    } 
  }


  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleInputChange(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleInputChange(event)} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
        <div>
        </div>
      </form>
    );
  }
}

export default LoginForm;




















// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//     };
//   }



//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     })
//   }


//   onSubmit = (event) => {
//     event.preventDefault()

//     // if (this.state.username || this.state.password === ""){
//     //   this.props.handleLogin(this.state)
//     // }

//     if (!this.state.username || !this.state.password) return

//     this.props.handleLogin(this.state)
    
//   }

//   render() {
//     return (
//       <form onSubmit={event => this.onSubmit(event)}>
//         <div>
//           <label>
//             Username
//             <input onChange={this.handleChange}id="username" name="username" type="text" value={this.state.username}/>
//           </label>
//         </div>
//         <div>
//           <label>
//             Password
//             <input onChange={this.handleChange} id="password" name="password" type="password" value={this.state.password}/>
//           </label>
//         </div>
//         <div>
//           <button type="submit">Log in</button>
//         </div>
//       </form>
//     );
//   }
// }

// export default LoginForm;
