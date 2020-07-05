import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = (props) => {
  return (
    <Form className="container">
      <FormGroup>
        <Label for="exampleName">Nombre</Label>
        <Input type="text" name="nombre" id="exampleName" placeholder="Ingresa tu Nombre" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Ingresa tu Email" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Mensaje</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
        
      <Button color="info">Submit</Button>
    </Form>
  );
}

export default Contact;