import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    
} from 'reactstrap';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';

type HeaderState = {

}

type HeaderProps = {
    message?: string
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
          
        }
      }
      clearToken() {
        localStorage.clear();
        this.setState({token: null})
      }

   render(){
       return(
           <div>
            <AppBar position="static">
                <Toolbar>
                {/* <IconButton 
                 edge="start"
                 color="inherit" 
                 aria-label="menu">
                <EmailIcon />
                </IconButton> */}
          <Typography variant="h6">
           {/* <Router>
          <Link to='/contact'>Contact Us!</Link>
          </Router>  */}
          HoosierGo
          </Typography>
        </Toolbar>
      </AppBar>
           </div>       
       )
   } 
}
export default Header;