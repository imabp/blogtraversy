import React from "react";
import { getBlogs } from "blogtraversy";
import { Custom, Examples, IntegrationGuide } from "./Views";
import usernames from "./username.config";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Nav,
} from "react-bootstrap";

const App = () => {
  const [view, setView] = React.useState(0);

  return (
    <>
      {" "}
      <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{padding:'20px'}}>
            <a href="https://github.com/imabp/blogtraversy">
            <img
              height="100"
              width="100"
              src="https://media.discordapp.net/attachments/834130556865347645/866319407055634452/Frame_42.png"
              />
            </a>
          </div>
          <div>
            <h1>Blog Traversy</h1>
            <h4>All your blogs at one place</h4>
            <h5>npm i blogtraversy</h5>
          </div>
        </div>
        <br />
        <Row>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setView(0);
                }}
              >
                Try it Out!
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setView(1);
                }}
              >
                Examples
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setView(2);
                }}
              >
                React Integration
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.npmjs.com/package/blogtraversy">
                View Docs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <br />
        {view === 0 ? <Custom /> : null}
        {view === 1 ? <Examples /> : null}
        {view === 2 ? <IntegrationGuide /> : null}
      </Container>
    </>
  );
};
export default App;
