import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

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

   render(){
       return(
           <header>
               <Navbar className="header">
                   {/* <Nav className="ml-auto" navbar>
                       <NavItem>
                           <NavLink href="www.google.com">
                               Profile Display
                           </NavLink>
                       </NavItem>
                    </Nav> */}
                    <NavbarBrand href='/alerts'>HoosierGo</NavbarBrand>   
               </Navbar>
           </header>       
       )
   } 
}
export default Header;