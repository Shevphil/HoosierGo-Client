import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';


type AuthState = {
  token: string | null,
  login: boolean,
  
};

type AuthProps = {
  token?: string | null,
  updateToken: Function,
};

class Auth extends React.Component <AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      token: "",
      login: false,
    };
    this.updateToken = this.updateToken.bind(this);
  }
  
  loginToggle=(event: React.MouseEvent)=> {
    event.preventDefault();
    this.setState({
      login: !this.state.login
    });
  }
  updateToken(newToken: string) {
    localStorage.setItem("token", newToken);
    this.setState({
      token: newToken,
    });
  }


   render() { 
    return(
        <Container className="auth-container">
            <Row> {!this.state.login ? (<Col md='6'>
                    <Signup updateToken={this.updateToken}/>
                </Col>):(<Col md="6" className="login-col">
                    <Login updateToken={this.updateToken}/>
                </Col>) }               
            </Row>
            <button onClick={this.loginToggle}>{this.state.login ? 'Signup': 'Login'}</button>
        </Container>
    )
  }
}

export default Auth;

