import {
  RECEIVE_TRANSACTIONS
} from '../constants/ActionTypes'

const initialState = ''

function update(state = initialState, action) {

	switch (action.type) {

    case RECEIVE_TRANSACTIONS:
      return action.transactions

		default:
			return state
  }
}

module.exports = update;
