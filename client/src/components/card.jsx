import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Card = (props) => {
  const { document, title } = props;
  const [stateTitle] = useState(title);

  return (
    <div className="card">
      <div className="pl-3 pr-3 pt-2 pb-2">
        <div className="mb-2 font-bold text-center">
          <span className="largeFont">Record</span>
          <strong className="largeFont ml-2 text-purple">{stateTitle}</strong>
        </div>
        <ListGroup className="listStyle">
          <ListGroupItem>
            <strong className="mr-3 text-purple">FirstName:</strong>
            {document.FirstName}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">LastName:</strong>
            {document.LastName}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">Gender:</strong>
            {document.Gender}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">Lattitude:</strong>
            {document.Latitude}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">Longitude:</strong>
            {document.Longitude}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">CreditCardNumber:</strong>
            {document.CreditCardNumber}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">CreditCardType:</strong>
            {document.CreditCardType}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">Email:</strong>
            {document.Email}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">DomainName:</strong>
            {document.DomainName}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">PhoneNumber:</strong>
            {document.PhoneNumber}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">MacAddress:</strong>
            {document.MacAddress}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">URL:</strong>
            {document.URL}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">UserName:</strong>
            {document.UserName}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">LastLogin:</strong>
            {document.LastLogin}
          </ListGroupItem>
          <ListGroupItem>
            <strong className="mr-3 text-purple">PaymentMethod:</strong>
            {document.PaymentMethod}
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Card;
