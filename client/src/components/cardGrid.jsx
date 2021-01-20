import React, { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import Card from "./card";
import AppPagination from "./pagination";
import { Container, Col, Row } from "reactstrap";
import FilterButton from "./filterButton";

const CardGrid = () => {
  const [documents, SetDocuments] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [documentPerPage] = useState(20);
  const [term, SetTerm] = useState("");
  const [size, SetSize] = useState(0);
  const [dependency, SetDependency] = useState(0);

  useEffect(() => {
    fetch(`https://api.enye.tech/v1/challenge/records`)
      .then((res) => res.json())
      .then((data) => {
        SetDocuments(data.records.profiles);
        SetSize(data.size);
        SetDependency(data.status);
      })
      .catch((err) => console.log(err));
  }, [dependency]);

  //Get current Document
  const indexOfLastDocument = currentPage * documentPerPage;
  const indexOfFirstDocument = indexOfLastDocument - documentPerPage;
  const currentDocuments = documents.slice(
    indexOfFirstDocument,
    indexOfLastDocument
  );
  //change page
  const paginate = (pageNumber) => SetCurrentPage(pageNumber);

  // loading function
  const showLoading = () => {
    return <h2 className="text-purple text-center">Loading...</h2>;
  };
  return (
    <React.Fragment>
      <SearchBar
        searchtext={(text) => {
          SetTerm(text);
        }}
      />
      <FilterButton
        filter={(text) => {
          SetTerm(text);
        }}
      />

      <Container>
        <Row>
          <Col>{dependency === 0 ? showLoading() : null}</Col>
        </Row>
        <Row lg="3" sm="2">
          {currentDocuments
            .filter((document) => {
              if (term === "Male" || term === "Female") {
                return document.Gender.indexOf(term) !== -1;
              } else if (term === "credit card") {
                return (
                  document.PaymentMethod.toLowerCase().indexOf("cc") !== -1
                );
              } else if (
                term === "money Order" ||
                term === "paypal" ||
                term === "check" ||
                term === "credit card"
              ) {
                return (
                  document.PaymentMethod.toLowerCase().indexOf(
                    term.toLowerCase()
                  ) !== -1
                );
              } else if (term === "") {
                return (
                  document.FirstName.toLowerCase().indexOf(
                    term.toLowerCase()
                  ) !== -1
                );
              } else {
                return (
                  document.FirstName.toLowerCase().indexOf(
                    term.toLowerCase()
                  ) !== -1
                );
              }
            })
            .map((document, index) => (
              <Col className="mb-2 mt-2 pt-2 pb-2">
                <Card key={index + 1} document={document} title={index + 1} />
              </Col>
            ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <AppPagination
              className="center mb-4 mt-2"
              documentsPerPage={documentPerPage}
              totalDocuments={size}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CardGrid;
