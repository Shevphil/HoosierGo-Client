import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';

type HomeState={
    token: string | null
}

type HomeProps={

    clearToken: () => void
}

class Home extends React.Component <HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      token: '',
    }
  }

  clearToken() {
    localStorage.clear();
    this.setState({token: null})
  }

   render(){
       return(
           <div>
        <Header/>
        <div className="mainDiv">
        {/* <Router>
        <Sidebar clearToken={this.clearToken} />
        </Router> */}
        </div>
        <Footer />
        </div>
       )
   } 
}


export default Home;