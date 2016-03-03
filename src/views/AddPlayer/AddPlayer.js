/* @flow */
import React from 'react'
import AddPlayerForm from '../../containers/AddPlayerForm'

export class AddPlayer extends React.Component {
  render () {
    return (
      <div>
        <h1>Add Player</h1>
        <AddPlayerForm />
      </div>
    )
  }
}

export default AddPlayer
