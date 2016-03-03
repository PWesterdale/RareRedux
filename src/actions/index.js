import fetch from 'isomorphic-fetch'
import { push }  from 'react-router-redux'

export const addPlayer = (player, score) => {
  return {
    type: 'ADD_PLAYER',
    player,
    score
  }
}

export const succesfullyAddedPlayer = () => {
  return {
    type: 'ADD_PLAYER_SUCCESS'
  }
}

export const failedAddingPlayer = () => {
  return {
    type: 'ADD_PLAYER_FAILURE'
  }
}

export const getPlayers = () => {
  return {
    type: 'GET_PLAYERS'
  }
}

export const receivePlayers = (json) => {
  return {
    type: 'RECEIVE_PLAYERS',
    players: json,
    recievedAt: Date.now()
  }
}

export function createPlayer(player, score)
{
  return function (dispatch) {

    dispatch(addPlayer(player, score));

    return fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: player,
        score: score,
      })
    })
      .then(response => response.json())
      .then((json) => { 
        dispatch(succesfullyAddedPlayer())
        dispatch(push('/'));
      })

  }
}

export function fetchPlayers() {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(getPlayers())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch('http://localhost:8000')
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePlayers(json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}