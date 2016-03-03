import { combineReducers } from 'redux'
import {ADD_PLAYER, GET_PLAYERS, RECEIVE_PLAYERS} from '../actions'

function players(state = {}, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      state.items = {};
      state.items.push({
        name: action.player,
        score: action.score
      });
      return state;
    case 'GET_PLAYERS':
      return {...state,
        isFetching: true,
        didInvalidate: true
      }
    case 'RECEIVE_PLAYERS':
      return {...state,
        isFetching: false,
        didInvalidate: true,
        items: action.players,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const playerApp = players

export default playerApp