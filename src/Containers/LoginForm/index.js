// import React, {Component} from 'react';
// import LoginForm from '.../../components/LoginForm'
// import Api from '../..utils/api'


// class LoginFrorm extends Component
// {
//     constructor (props)
//     {
//         super(props);
//         this.state={
//             email:"",
//             password: ""

//         }
//     }
//     inputChangeHandler=(e) =>this.setState ({[e.target.name]:e.targe.value}); 
    
//     login =()=> {
// Api.login(this.state.email,
//     this.state.password).then 
//     (session => { this.props.onLogin
//         (session);


//     })
//     }

//     render ()
//     {
//         return <div className = "row">
//          <div className = "col-6 offset -3">
//              <div clasName ="form-group">
//                  <input
//                  onChange={this.inputChangeHandler}
//                  value= {this.state.email}
//                  type= "email"
//                  name= "email"
//                  placeholder= "Enter your email"/>

//                   <input
//                     onChange={this.inputChangeHandler}
//                     value= {this.state.password}
//                  type= "password"
//                  name= "epassword"
//                  placeholder= "Enter your password"/>
//                  <button  onClick = {this.login} className = "btn btn-primary">Login</button>   


//              </div>

//          </div>

//         </div>
//     }
// }
// export default LoginFrom;