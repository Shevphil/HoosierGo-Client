import React from 'react';
import {Form, FormGroup, Button, Label, Input, } from 'reactstrap';


class Contact extends React.Component {


    render(){
        return (
            <div>
             <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>   
              <Button>Submit</Button>   
             </Form>   
            </div>
        )
    }
}

export default Contact;