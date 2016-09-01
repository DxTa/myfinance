import fetch from 'isomorphic-fetch'
import { Endpoints } from '../constants/api'
import {
  RECEIVE_TRANSACTIONS
} from '../constants/ActionTypes'

function fetchTransactions(token) {
  return dispatch => {
    return fetch(Endpoints.TRANSACTIONS, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(req => req.json())
    .then(json => dispatch({
      type: RECEIVE_TRANSACTIONS,
      transactions: json,
      receivedAt: Date.now()
    }))
  }
}

module.exports = { fetchTransactions }
