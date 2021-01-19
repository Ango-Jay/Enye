import React, { useState } from "react";

import { Form, Label, Input, Button, Container, Row, Col } from "reactstrap";

const FilterButton = ({ filter }) => {
  const [click, SetClick] = useState("");
  const [filterOpen, SetFilterOpen] = useState(false);

  const maleButton = () => {
    SetClick("Male");
  };
  const femaleButton = () => {
    SetClick("Female");
  };
  const JCB = () => {
    SetClick("JCB");
  };
  const clear = () => {
    SetClick("");
  };
  // pass filter term to app
  const onSubmit = (e) => {
    e.preventDefault();
    filter(click);
  };
  // toggle filter button
  const filterToggle = () => {
    SetFilterOpen(true);
  };
  // close filter box
  const closeFilter = () => {
    SetFilterOpen(false);
  };

  // show filter box
  const showFilter = () => {
    if (filterOpen === true) {
      return (
        <div className="filter-box p-2 m-4">
          <div className="gender-filter p-2 my-2 mx-4">
            <h6 className="text-purple mb-2 ml-2 text-bold">Gender</h6>
            <Form onSubmit={onSubmit} check>
              <Label className=" px-3 make-block" check>
                <Input onClick={maleButton} type="radio" name="male" />
                Male
              </Label>
              <Label className="px-3 make-block" check>
                <Input onClick={femaleButton} type="radio" name="male" />
                Female
              </Label>
              <Label className="px-3 make-block" check>
                <Input onClick={clear} type="radio" name="male" />
                None
              </Label>
              <div>
                <Button className="filter-button" size="sm" type="submit">
                  Filter
                </Button>
              </div>
            </Form>
          </div>
          <div className="gender-filter p-2 mx-4 my-2">
            <h6 className="text-purple mb-2 ml-2 text-bold">CreditCard Type</h6>
            <Form onSubmit={onSubmit} check>
              <Label className="px-3 make-block" check>
                <Input onClick={JCB} type="radio" name="JCB" /> JCB
              </Label>
              <Label className="px-3 make-block" check>
                <Input onClick={clear} type="radio" name="JCB" />
                None
              </Label>
              <div>
                <Button className="filter-button" size="sm" type="submit">
                  Filter
                </Button>
              </div>
            </Form>
          </div>
          <div>
            <Button
              color="danger"
              className="my-4"
              size="sm"
              onClick={closeFilter}
            >
              &times;
            </Button>
          </div>
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="center">
            <Button
              className="filter-button mb-4 max-width"
              onClick={filterToggle}
              size="sm"
              color="dark"
            >
              Filter By
            </Button>
          </Col>
        </Row>
        <Row className="center">
          <Col xs="auto" className="center">
            {filterOpen === true ? showFilter() : null}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FilterButton;
