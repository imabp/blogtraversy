import React, { useState } from "react";
import { getBlogs } from "blogtraversy";
// importing react bootstrap for quick css.
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

const customView = () => {
  // initializing states
  const [blogs, setBlogs] = React.useState([]);
  const [medium, setMedium] = React.useState("abirwrites");
  const [hashnode, setHashnode] = React.useState("imabp");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  // config for usernames
  let usernames = {
    mediumUsername: `${medium}`,
    hashnodeUsername: `${hashnode}`,
  };
  
  // handle to fetch blogs 
  // param: type : 'all' | 'medium' | 'hashnode'
    const onClickHandle = async (type) => {
    setLoading(true);
    try {
       
        const blogs = await getBlogs(type, usernames);
        
        if (type == "all") {
            // spreading the hashnodeposts and mediumarticles when fetching under 'all' condition.
            setBlogs([...blogs.hashnodePosts, ...blogs.mediumArticles]);
        } else {
            setBlogs(blogs);
        }
    } catch (err) {
        setError(true);
    }
    setLoading(false);
  };

  return (
    <Container>
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            Medium Username: @
          </InputGroup.Text>
          <FormControl
            placeholder="abirwrites"
            aria-label="abirwrites"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setMedium(e.target.value);
            }}
          />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Hashnode Username</InputGroup.Text>
          <FormControl
            placeholder="imabp"
            aria-label="abirwrites"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setHashnode(e.target.value);
            }}
          />
        </InputGroup>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => {
                //to fetch the posts on medium, type = "medium"
                onClickHandle("medium");
            }}
          >
            Get MEDIUM Blogs
          </Button>
        </Col>

        <Col>
          <Button
            onClick={() => {
                //to fetch hashnode blogs, type = "hashnode"
                onClickHandle("hashnode");
            }}
          >
            Get HASHNODE Blogs
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
                //to fetch all the blogs, type = "all"
                onClickHandle("all");
            }}
          >
            Get ALL Blogs
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <code>
          // username.config.js <br />
          const usernames = {"{"}
          <br />
          mediumUsername: {`"${medium}"`},<br /> hashnodeUsername:{" "}
          {`"${hashnode}"`},<br />
          {"}"};<br />
          <br />
          export default usernames;
        </code>
      </Row>
      <br />
      <br />
      <Row>
        {error && <p>Request Error</p>}
        {loading && <p>Loading...</p>}
        {!loading &&
          blogs &&
          blogs.map((el) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={`${el.thumbnail}`} width="200" />
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Button variant="primary">
                      <a
                        href={el.link}
                        target="_blank"
                        rel="noreferrer noopenner"
                      >
                        Read Article
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
export default customView;
