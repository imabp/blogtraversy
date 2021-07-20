import React from "react";
import { getBlogs } from "blogtraversy";
import {Custom} from "./Views";
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
  const [blogs, setBlogs] = React.useState([]);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogs = await getBlogs("medium", usernames);
        setBlogs(blogs);
      } catch (err) {
        setError(true);
      }
    }
    fetchBlogs();
  }, []);

 
  const [view, setView] = React.useState(0);

  return (
    <>
      {" "}
      <Container style={{ marginTop: "20px", marginBottom:"20px" }}>
        <h1>Blog Traversy</h1>
        <h4>All your blogs at one place</h4>
        <h5>npm i blogtraversy</h5>
        <br />
        <Row>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={()=>{setView(0)}}>Try it Out!</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{setView(1)}}>Examples</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{setView(2)}}>React Integration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.npmjs.com/package/blogtraversy">View Docs</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <br/>
        {view === 0 ? <Custom /> : null}
        {view === 1 ? <>View2</> : null}
        {view === 2 ? <>View3</> : null}
     
      </Container>

    </>
  );
};
export default App;
