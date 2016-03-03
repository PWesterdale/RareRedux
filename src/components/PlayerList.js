import React, { PropTypes } from 'react'
import Player from './Player'

export class PlayerList extends React.Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  static propTypes = {
    players: PropTypes.objectOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    }).isRequired).isRequired
  }

  render() {
    var players = [];
    for(var player in this.props.players){
      players.push(<Player key={player} {...this.props.players[player]} />)
    }
    return (
      <table>
        <tbody>
          {players}
        </tbody>
      </table>
    )
  }
}

export default PlayerList