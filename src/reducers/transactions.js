import {
  RECEIVE_TRANSACTIONS
} from '../constants/ActionTypes'

const initialState = {
  raw_values: [],
  sum: 0,
  values: []
}

function update(state = initialState, action) {

	switch (action.type) {

    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, {
        raw_values: action.transactions
      })

		default:
			return state
  }
}

module.exports = update;
