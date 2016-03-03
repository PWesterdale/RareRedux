import React, { PropTypes } from 'react'

const Player = ({ name, score }) => (
  <tr>
    <td>
      {name}
    </td>
    <td>
      {score}
    </td>
  </tr>
)

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default Player