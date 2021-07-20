import React from "react";
import { getBlogs } from "blogtraversy";
import usernames from "../../username.config";
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
import Accordion from "react-bootstrap/Accordion";
const Examples = () => {
  const [mblogs, setMediumBlogs] = React.useState([]);
  const [hblogs, setHashnodeBlogs] = React.useState([]);
  const [ablogs, setAllBlogs] = React.useState([]);
  const [eblogs, setErrorBlogs] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    async function fetchBlogs() {
      try {
        const m_blogs = await getBlogs("medium", usernames);
        setMediumBlogs(m_blogs);
        const h_blogs = await getBlogs("hashnode", usernames);
        setHashnodeBlogs(h_blogs);
        const a_blogs = await getBlogs("all", usernames);
        setAllBlogs([...a_blogs.hashnodePosts, ...a_blogs.mediumArticles]);
        const error_config_username = {
          mediumUsername: "abirwritesblahblahasdhasoidh",
          hashnodeUsername: "imabpaskdjhasjdhasd",
        };
        const e_blogs = await getBlogs("all", error_config_username);
        setErrorBlogs([...e_blogs.hashnodePosts, ...e_blogs.mediumArticles]);
      } catch (err) {
        setError(true);
      }
    }
    fetchBlogs();
    console.clear();
  }, []);

  return (
    <>
      <Row>
        <h5> 🎉 New Feature: Better Error Handling </h5>
        <p>
          {" "}
          If any username doesnt exists, the following data will be received, with custom the thumbnail.
        </p>
        <br />
        <br />
        <Row>
          {eblogs &&
            eblogs.map((el) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={`${el.thumbnail}`}
                      width="200"
                    />
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
      </Row>
      <br />
      <br />

      <h3> Configuration </h3>
      <Row>
        <p>
          <code>
            // username.config.js <br />
            const usernames = {"{"}
            <br />
            mediumUsername: "abirwrites",
            <br /> hashnodeUsername: "imabp",
            <br />
            {"}"};<br />
            <br />
            export default usernames;
          </code>
        </p>
      </Row>
      <br />

      <Row>
        <Col>
          <Row style={{ marginBottom: "10px" }}>
            <h6>getBlogs("medium", usernames)</h6>
            <code>count: {mblogs.length}</code>
          </Row>
          {mblogs &&
            mblogs.map((el) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={`${el.thumbnail}`}
                      width="200"
                    />
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
        </Col>
        <Col>
          <Row style={{ marginBottom: "10px" }}>
            <h6>getBlogs("hashnode", usernames)</h6>
            <code>count: {hblogs.length}</code>
          </Row>

          {hblogs &&
            hblogs.map((el) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={`${el.thumbnail}`}
                      width="200"
                    />
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
        </Col>
        <Col>
          <Row style={{ marginBottom: "10px" }}>
            <h6>getBlogs("all", usernames)</h6>
            <code>count: {ablogs.length}</code>
          </Row>

          {ablogs &&
            ablogs.map((el) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={`${el.thumbnail}`}
                      width="200"
                    />
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
        </Col>
      </Row>
    </>
  );
};
export default Examples;
