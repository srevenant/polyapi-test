'use strict'

const request = require('request')
const config = require('config')
const jwt = require('jsonwebtoken')
const uuid4 = require('uuid/v4')

console.log(`Using ${config.domain} with key ${config.apikey}`)

const data = {
  "city": "Draper",
  "state": "UT",
  "mailing_postal_code": 84020,
  "score": 700,
  "years_business": 1,
  "legal_entity_type": "LLC",
  "application_type": "RENEWAL",
  "average_monthly_sales": 250,
  "balance": -20.46,
  "deposit_amount": 645.95,
  "withdrawal_amount": 201.25,
  "deposit_count": 5,
  "withdrawal_count": 4,
  "month": 10,
  "year": 2017,
  "create_date": "2018-06-02",
  "industry_name": "Real Estate Agents",
  "naics_code": 531210
}

/* ********************************************************************** */
request.post(`https://${config.domain}/api/v1/polyform/origination.predict`,
  { body: JSON.stringify(data),
    headers: {
      'Authorization': 'Bearer ' + config.apikey,
      'Content-type': 'application/json'
    }
  }, (err, res, body) => {
    if (err) { console.log(err) }
    if (res.statusCode === 200) {
      console.log(`Request Made, result: ${res.body}`)
    } else {
      console.log('Unexpected result=' + res.statusCode + '\n' + res.body)
    }
  }
)
