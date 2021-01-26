# Phase 1.1: Front-end
## Purpose
The purpose is to gauge your understanding of working with JSON data with various RESTful APIs. In this challenge, we provide a sample API with a single endpoint and ask you to write some Javascript to request data from the API and transform the response.
## Records API
The provided API below returns a list of profiles with information surrounding e-commerce transaction details.
``` bash
https://api.enye.tech/v1/challenge/records
```
API response schema
``` JSON

{
    "records": {
        "profiles": [{
            "FirstName": "",
            "LastName": "",
            "Gender": "",
            "Latitude": "",
            "Longitude": "",
            "CreditCardNumber": "",
            "CreditCardType": "",
            "Email": "",
            "DomainName": "",
            "PhoneNumber": "",
            "MacAddress": "",
            "URL": "",
            "UserName": "",
            "LastLogin": "",
            "PaymentMethod": ""
        }, ...]
    },
    "status": "",
    "size": ""
}
```
