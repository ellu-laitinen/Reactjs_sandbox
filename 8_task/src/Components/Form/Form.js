import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewBlog = () => {
    return (
       
           <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Blog title" />
   
  </Form.Group>
 
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Blog text</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Blog text" />
  </Form.Group>
  <Button variant="secondary">Send</Button>{' '}
</Form>

       
    );
}

export default NewBlog;
