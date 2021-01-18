import React, { useState } from "react";
import { Container, Input, Button, Form } from "reactstrap";

const SearchBar = (props) => {
  const { searchtext } = props;
  const [text, SetText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchtext(text);
  };
  return (
    <Container className="searchForm">
      <Form onSubmit={onSubmit}>
        <div className="searchGroup">
          <Input
            type="search"
            placeholder="Enter search term"
            className="mb-2 search"
            size="sm"
            onChange={(e) => {
              SetText(e.target.value);
            }}
          />
          <Button color="dark" size="sm" type="submit" className="searchButton">
            Search
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SearchBar;
