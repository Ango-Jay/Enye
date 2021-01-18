import React, { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import Card from "./card";
import AppPagination from "./pagination";
import { Container, Col, Row } from "reactstrap";

const CardGrid = () => {
  const [documents, SetDocuments] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [currentPage, SetCurrentPage] = useState(1);
  const [documentPerPage] = useState(15);
  const [term, SetTerm] = useState("");
  const [size, SetSize] = useState(0);
  useEffect(() => {
    fetch(`https://api.enye.tech/v1/challenge/records?${term}`)
      .then((res) => res.json())
      .then((data) => {
        SetIsLoading(true);
        SetDocuments(data.records.profiles);
        SetSize(data.size);
        SetIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  //Get current Document
  const indexOfLastDocument = currentPage * documentPerPage;
  const indexOfFirstDocument = indexOfLastDocument - documentPerPage;
  const currentDocuments = documents.slice(
    indexOfFirstDocument,
    indexOfLastDocument
  );
  //change page
  const paginate = (pageNumber) => SetCurrentPage(pageNumber);

  if (isLoading === true) {
    return <h2 className="text-purple text-center">Loading...</h2>;
  }
  return (
    <React.Fragment>
      <SearchBar
        searchtext={(text) => {
          SetTerm(text);
        }}
      />

      <Container>
        <Row lg="3" sm="2">
          {currentDocuments.map((document, index) => (
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
