import React from 'react'
import { connect } from 'react-redux'
import { createPlayer } from '../actions'

let AddPlayerForm = ({ dispatch }) => {
  let name
  let score

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        if (!name.value.trim() && !score.value.trim()) {
          return
        }
        dispatch(createPlayer(name.value, parseInt(score.value)))
        name.value = ''
        score.value = ''
      }}>
        <input ref={node => {
          name = node
        }} />

        <input ref={node => {
          score = node
        }} />
        <button type="submit">
          Add Player
        </button>
      </form>
    </div>
  )
}

AddPlayerForm = connect()(AddPlayerForm)

export default AddPlayerForm