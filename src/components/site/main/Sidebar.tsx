import React from 'react';
import {
    Route,
    Link,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import Home from './Home';
import PostIndex from '../../posts/PostIndex';
import Events from '../externals/Events';
import Contact from '../externals/Contact';

type SidebarState={
    simpleToken: string
}

type SidebarProps={
    clearToken: () => void,
    token: string | null
}

class Sidebar extends React.Component <SidebarProps, SidebarState> {
    constructor(props: SidebarProps) {
        super(props);
        this.state = {
          simpleToken: ''
        }
      }

      tokenizer() {
        if(this.props.token){
            this.setState({
                simpleToken: this.props.token
            })
            console.log(this.props.token, this.state.simpleToken)
        }
    }

      componentWillMount() {
          this.tokenizer()
      } 

   render(){
       return(
        <div className='sidebar'>
         <div className='sidebar-list-styling'>
            <ul className='sidebar-list list unstyled'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/postindex'>Posts</Link></li>
                <li><Link to='/events'>Events</Link></li>
            </ul>
         </div>
         <div className='sidebar-route'>
          <Switch>
           <Route exact path='/home'><Home token={this.props.token} clearToken={this.props.clearToken} /></Route>
           <Route exact path='/postindex'><PostIndex token={this.props.token} /></Route>
           <Route exact path='/events'><Events /></Route>
          </Switch>   
         </div>
        </div>
                
       );
   }; 
}
export default Sidebar;



// {/* <div className='sidebar-list-styling'>
//             <Row>
//             {/* <ul className="sidebar-list list-unstyled"> */}
//                <div className="main"> <Col md='3'><a href="/">HOME</a></Col></div>
//                 <div className="main"><Col md='3'><a href="/Alerts">POSTS</a></Col></div>
//                 <div className="main"><Col md='3'><a href="Explore">EVENTS</a></Col></div>
//             {/* </ul> */}
//             </Row>
//         </div>
//         <div className='sidebar-display'>
//             <Switch>
//                 <Route exact path="/home" className='testtwo'><Home clearToken={this.props.clearToken}/></Route>
//                 <Route exact path="/alerts"><Alerts /></Route>
//                 <Route exact path="/explore"><Explore /></Route>
//                 <Route exact path="/"><Home clearToken={this.props.clearToken} /></Route>
//             </Switch>
//         </div> */}