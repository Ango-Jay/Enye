import React, { useState } from "react";
import { Container, Input, Button, Form, Row, Col } from "reactstrap";

const SearchBar = (props) => {
  const { searchtext } = props;
  const [text, SetText] = useState("O");

  const onSubmit = (e) => {
    e.preventDefault();
    searchtext(text);
  };

  return (
    <React.Fragment>
      <Container className="searchForm">
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <div className="searchGroup">
                {text !== "" ? (
                  <Button
                    color="danger"
                    className="my-4"
                    size="sm"
                    onClick={() => {
                      searchtext("");
                      SetText("");
                    }}
                  >
                    &times;
                  </Button>
                ) : null}

                <Input
                  type="search"
                  placeholder="Enter search term"
                  className="mb-2 search"
                  size="sm"
                  onChange={(e) => {
                    SetText(e.target.value);
                  }}
                />
                <Button
                  color="dark"
                  size="sm"
                  type="submit"
                  className="searchButton"
                >
                  Search
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SearchBar;
