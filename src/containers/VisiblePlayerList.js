import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPlayers } from '../actions'
import PlayerList from '../components/PlayerList'

const getVisiblePlayers = (players) => {
  return players;
}

const mapStateToProps = (state) => {
  return {
    players: getVisiblePlayers(state.playerApp.items ? state.playerApp.items : {})
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPlayers }, dispatch)
}

const VisiblePlayerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

export default VisiblePlayerList