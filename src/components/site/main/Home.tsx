import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';

type HomeState={

}

type HomeProps={

    clearToken: () => void,
    token:string | null
}

class Home extends React.Component <HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      token: '',
    }
  }


   render(){
       return(
           <div>
            <Header/>
            <br/>
            <br/>
            <h1>HELLO</h1>
            <hr/>
            <br/>
            <div>
              <Router>  
                <Sidebar clearToken={this.props.clearToken} token={this.props.token}/>
              </Router>
                
            </div>
            <Footer />
          </div>
       )
   } 
}


export default Home;