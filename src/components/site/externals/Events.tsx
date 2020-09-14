import React from 'react';
import {
    Button, 
    Row, 
    Col, 
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

class Events extends React.Component {


    render(){
        return (
          <div>
            <Card>
            {/* <CardTitle>Tailgate at IU Stadium</CardTitle>    */}
             <CardImg
                alt="..."
                img src={"https://images.unsplash.com/photo-1599948863156-9cb703640595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                top
             ></CardImg>
            <CardBody>
                <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button
            color="primary"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Comment
          </Button>
        </CardBody>
      </Card>
          </div>  
        )
    }
}

export default Events;