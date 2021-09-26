import React from 'react';
import './App.scss';
import {
  Container, Row, Col, InputGroup, Button, FormControl, Form, Stack
  } from 'react-bootstrap';

type AppProps = {
}

type AppState = {
  isShowAlert: boolean
}
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    isShowAlert: true
  }
  render(){
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>Project - Todo List <span>Reactjs</span></h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <InputGroup>
                <FormControl 
                  aria-describedby="Search"
                />
                <Button>
                  Go
                </Button>
              </InputGroup>
            </Col>
            <Col xs={2}>
              <InputGroup>
                <Form.Select className="me-2 ">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Select>
                <Button variant="success">name-asc</Button>
              </InputGroup>
            </Col>
            <Col xs={6}>
              <InputGroup>
                <Button variant="primary" className="w-100">Add Task</Button>
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={{span: 6, offset: 6}}>
              <Stack direction="horizontal" gap={1}>

                <Col xs={6}>
                  <FormControl aria-describedby="Search"/>
                </Col>
                <Form.Select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Select>
                <Button variant="success">Submit</Button>
                <Button variant="success">Cancel</Button>

              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
