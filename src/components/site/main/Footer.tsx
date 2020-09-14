import React from 'react';
import {
    Row
} from 'reactstrap';

type FooterState = {

}

type FooterProps = {
    message?: string
}


class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {
          
        }
      }

   render(){
       return(
        <div className='footerNav'>
        <Row>
            <p>&copy; HoosierGoInc 2020</p>
        </Row>
        </div>
                
       )
   } 
}
export default Footer;