import React from 'react';
import './App.scss';
import {
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Form,
  Stack,
  Table
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
          <Row className="px-4">
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
          <Row className="px-4 mt-3">
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
          <Row className="mt-3">
            <Col xs={12} >
              <h5 className="mb-0 bg-success">
                List Task
              </h5>
            </Col>
            <Col xs={12}>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tasks</th>
                    <th>Level</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor eget ipsum id elementum. Morbi ac ante at mi fermentum vestibulum. Proin ullamcorper nulla porttitor est posuere, vel facilisis nibh elementum. </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor eget ipsum id elementum. Morbi ac ante at mi fermentum vestibulum. Proin ullamcorper nulla porttitor est posuere, vel facilisis nibh elementum. </td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor eget ipsum id elementum. Morbi ac ante at mi fermentum vestibulum. Proin ullamcorper nulla porttitor est posuere, vel facilisis nibh elementum. </td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
