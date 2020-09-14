import React from 'react';
import {
    Route,
    Link,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import Home from './Home';
import Alerts from '../externals/Alerts';
import Explore from '../externals/Explore';

type SidebarState={
    
}

type SidebarProps={
    clearToken: () => void
}

class Sidebar extends React.Component <SidebarProps, SidebarState> {
    constructor(props: SidebarProps) {
        super(props);
        this.state = {
          
        }
      }

   render(){
       return(
        <div className='sidebar'>
        <div className='sidebar-list-styling'>
//             <Row>
//             {/* <ul className="sidebar-list list-unstyled"> */}
//                <div className="main"> <Col md='3'><a href="/">HOME</a></Col></div>
//                 <div className="main"><Col md='3'><a href="/Alerts">POSTS</a></Col></div>
//                 <div className="main"><Col md='3'><a href="Explore">EVENTS</a></Col></div>
//             {/* </ul> */}
//             </Row>
//         </div>
        </div>
                
       )
   } 
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