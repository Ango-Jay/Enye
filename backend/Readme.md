# Phase 1.2: Back-end
Purpose
In this challenge, the goal is to examine your back-end skills in creating the backbone structure of an application
## Currency Rates API
You have been tasked with creating a service integration to a public API and exposing a RESTful endpoint. The endpoint will accept requests and returns a modified response schema from the integrated API.
Your application must integrate with the Exchange Rate API to proxy requests 
Your REST endpoint /api/rates must return a JSON object of the latest currency rates in the following format/schema:
``` JavaScript
{
    "results": {
        "base": "",
        "date": "",
        "rates": {
        }
    }
}
```
