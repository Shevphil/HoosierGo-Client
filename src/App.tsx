import React from 'react';
import './App.css';
import Auth from './components/authPage/Auth';
// import Contact from './components/site/externals/Contact';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/site/main/Header';
import Home from './components/site/main/Home';



type AppState = {
    token: string | null,
}

type AppProps ={
    opProp?: string | null,
}


class App extends React.Component <AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      token: ''
    }
  }
 
  componentWillMount() {
    if(localStorage.getItem('token')){
      this.setState({token:(localStorage.getItem('token'))})
    }
  }

  updateToken(newToken: string) {
    localStorage.setItem("token", newToken);
    this.setState({
      token: newToken,
    });
  }

  clearToken() {
    localStorage.clear();
    this.setState({token: null})
  }

  // protectedViews(token:string | null) {
  //   return ((token) ? <Home clearToken={this.clearToken}/> :
  //   <Auth updateToken={this.updateToken}/>)
  // }
    render(){
      return (
        <div className="App">
          <Auth updateToken={this.updateToken}/>
        <Home token={this.state.token} clearToken={this.clearToken}/>
        </div>
      );
    }
}  
export default App;
